package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.*;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.model.EmployeeModel;
import com.declaratie.declaratieapi.util.StateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.plaf.nimbus.State;
import java.text.MessageFormat;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DeclarationService {

    private DeclarationRepository declarationRepository;

    @Autowired
    public DeclarationService(DeclarationRepository declarationRepository){
        this.declarationRepository = declarationRepository;
    }

    public DeclarationModel create(DeclarationModel declarationModel) {

        if(declarationModel == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Declaration should not be null.");

        try {
            return new DeclarationModel(this.declarationRepository.save(declarationModel.toDeclaration()));
        }catch (TransactionSystemException ex) {
            ApiError apiError = RestExceptionHandler.handleBadRequest(ex);
            throw new ResponseStatusException(apiError.getHttpStatus(), apiError.getMessage());
        }
    }

    /***
     * To get declaration
     * @param id of declaration to retrieve
     * @return Representative DeclarationModel
     */
    @Transactional
    public DeclarationModel read(Long id) {
        Optional<Declaration> toRead = this.declarationRepository.findById(id);

        if(!toRead.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    MessageFormat.format("Declaration with id={0} not found", id));

        Declaration toReturn = toRead.get();
        toReturn.getFiles();

        return new DeclarationModel(toReturn);
    }

    public DeclarationModel update(Long id, DeclarationModel declarationModel, EmployeeModel employeeModel) {
        DeclarationModel toReturn = null;

        if(declarationModel == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Declaration should not be null.");

        Optional<Declaration> declarationExist = this.declarationRepository.findById(id);

        if(!declarationExist.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        Declaration toUpdate = declarationExist.get();

        // Check if employee is true and state is allowed for the employee to change the declaration
        if (employeeModel.getId() == toUpdate.getEmpId() && employeeModel.getId() != toUpdate.getManId() && StateUtils.empIsAllowed(toUpdate.getStatusEnum())) {
            toReturn = this.update(id, declarationModel);
        }
        // Check if manager is true and state is allowed for the manager to change the declaration
        else if (employeeModel.getId() == toUpdate.getManId() && StateUtils.manIsAllowed(toUpdate.getStatusEnum())) {
            toReturn = this.update(id, declarationModel);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MessageFormat.format("Declaratie met id={0} is ", toUpdate.getStatusEnum()));
        }

        return toReturn;
    }

    public DeclarationModel update(Long id, DeclarationModel declarationModel) {

        if(declarationModel == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Declaration should not be null.");

        Optional<Declaration> declarationExist = this.declarationRepository.findById(id);

        if(!declarationExist.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        StateEnum currentState = declarationExist.get().getStatusEnum();

        if(currentState == StateEnum.INPROGRESS || currentState == StateEnum.APPROVED){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MessageFormat.format("Declaratie met id={0} is ", currentState));
        }

        try {
            Declaration toUpdate = declarationModel.toDeclaration();
            toUpdate.setId(id);

            return new DeclarationModel(this.declarationRepository.save(toUpdate));
        }catch (TransactionSystemException ex) {
            ApiError apiError = RestExceptionHandler.handleBadRequest(ex);
            throw new ResponseStatusException(apiError.getHttpStatus(), apiError.getMessage());
        }
    }

    @Transactional
    public List<DeclarationModel> getAll(EmployeeModel employeeModel) {

        List<Declaration> toReturn = null;

        if (employeeModel.getId() == employeeModel.getManagerId())
            toReturn = this.declarationRepository.getAllByManId(employeeModel.getId());
        else
            toReturn = this.declarationRepository.getAllByEmpId(employeeModel.getId());

        return Optional.ofNullable(toReturn).orElse(Collections.emptyList()).stream()
                .map(data -> {
                    DeclarationModel transformed = new DeclarationModel(data);
                    transformed.setFiles(null);
                    return transformed;
                })
                .collect(Collectors.toList());
    }

    @Transactional
    public List<DeclarationModel> getAll() {
        List<Declaration> toReturn = this.declarationRepository.findAll();

        return Optional.ofNullable(toReturn).orElse(Collections.emptyList()).stream()
                .map(data -> {
                    DeclarationModel transformed = new DeclarationModel(data);
                    transformed.setFiles(null);
                    return transformed;
                })
                .collect(Collectors.toList());
    }

    public List<DeclarationModel> getPaging(int from, int pagesize) {
        Sort sortFirst = Sort.by("id").descending();

        return this.declarationRepository.findAll(sortFirst).stream()
                .map(data -> new DeclarationModel(data))
                .collect(Collectors.toList());

//        Sort sortFirst = Sort.by("id").descending();
//
//        return this.declarationRepository.findAll(sortFirst).subList(2, 4).stream()
//                .map(DeclarationModel::new)
//                .collect(Collectors.toList());
    }

    public boolean existsById(Long id){
        return this.declarationRepository.existsById(id);
    }

    public Optional<Declaration> findById(Long id){
        return this.declarationRepository.findById(id);
    }

    /***
     * Method for deleting declaration from the database
     * @param id of the declaration to delete
     * @throws ResponseStatusException when declaration doesnt exist
     * @throws ResponseStatusException when declaration has a state of inprogress or approved
     */
    public void delete(Long id) {

        Optional<Declaration> declarationExist = this.declarationRepository.findById(id);

        if(!declarationExist.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        StateEnum currentState = declarationExist.get().getStatusEnum();
        if(currentState == StateEnum.INPROGRESS || currentState == StateEnum.APPROVED)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MessageFormat.format("Declaratie met id={0} is in behandeling", id));

        this.declarationRepository.deleteById(id);
    }

    public void delete(Long id, EmployeeModel employeeModel) {

        Optional<Declaration> declarationExist = this.declarationRepository.findById(id);

        if(!declarationExist.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        Declaration declaration = declarationExist.get();

        // Check if employee is true and state is allowed for the employee to delete the declaration
        if(employeeModel.getId() == declaration.getEmpId() && StateUtils.empIsAllowed(declaration.getStatusEnum()))
            this.declarationRepository.deleteById(id);

        // Check if manager is true and state is allowed for the manager to delete the declaration
        else if(employeeModel.getId() == declaration.getManId() && StateUtils.manIsAllowedToDelete(declaration.getStatusEnum()))
            this.declarationRepository.deleteById(id);
        else
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MessageFormat.format("Declaratie met id={0} is in behandeling", id));
    }

    public void deleteAll() {
        this.declarationRepository.deleteAll();
    }
}
