package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.*;
import com.declaratie.declaratieapi.model.DeclarationModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

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

    public DeclarationModel update(Long id, DeclarationModel declarationModel) {

        if(declarationModel == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Declaration should not be null.");

        Optional<Declaration> declarationExist = this.declarationRepository.findById(id);

        if(!declarationExist.isPresent())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        StateEnum currentState = declarationExist.get().getStatusEnum();

        if(currentState == StateEnum.INPROGRESS || currentState == StateEnum.APPROVED){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, MessageFormat.format("Declaratie met id={0} is ", currentState));
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
    public List<DeclarationModel> getAll() {
        List<Declaration> toReturn = this.declarationRepository.findAll();

        return Optional.ofNullable(toReturn).orElse(Collections.emptyList()).stream()
                .map(DeclarationModel::new)
                .collect(Collectors.toList());
    }

    public List<DeclarationModel> getPaging(int from, int pagesize) {
        Sort sortFirst = Sort.by("id").descending();

        return this.declarationRepository.findAll(sortFirst).stream()
                .map(DeclarationModel::new)
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

    public void deleteAll() {
        this.declarationRepository.deleteAll();
    }
}
