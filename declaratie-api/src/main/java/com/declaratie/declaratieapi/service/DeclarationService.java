package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Transactional
@Service
public class DeclarationService {

    private DeclarationRepository declarationRepository;

    private Function<Declaration, DeclarationModel> declarationMapper = declaration -> new DeclarationModel(declaration);

    @Autowired
    public DeclarationService(DeclarationRepository declarationRepository){
        this.declarationRepository = declarationRepository;
    }

    public DeclarationModel create(Declaration declaration) throws UnprocessableDeclarationException {

        if(declaration == null)
            throw new UnprocessableDeclarationException("Declaration is not processable.");

        try {
            return new DeclarationModel(this.declarationRepository.save(declaration));
        }catch (TransactionSystemException e) {
            throw new UnprocessableDeclarationException("Declaration is not processable - constraint violation");

        }catch (DataIntegrityViolationException e){
            throw new UnprocessableDeclarationException("Declaration is not processable - data integrity");
        }
    }

    public DeclarationModel read(Long id) throws DeclarationNotFoundException {
        Optional<Declaration> toRead = this.declarationRepository.findById(id);

        if(!toRead.isPresent() || id < 0)
            throw new DeclarationNotFoundException(MessageFormat.format("Declaration with id={0} not found", id));

        Declaration toReturn = toRead.get();

//        Hibernate.initialize(toReturn.getFiles());
        toReturn.getFiles();
//        System.out.println("Extra data: " + toReturn.getFiles().size());

        return new DeclarationModel(toReturn);
    }

    public DeclarationModel update(Long id, DeclarationModel declarationModel) throws DeclarationNotFoundException, UnprocessableDeclarationException {
        if(!this.existsById(id) || id < 0)
            throw new DeclarationNotFoundException(MessageFormat.format("Declaration with id={0} not found", id));

        if(declarationModel == null)
            throw new UnprocessableDeclarationException("Declaration is not processable.");

        try {
            Declaration toUpdate = declarationModel.toDeclaration();
            toUpdate.setId(id);

            return declarationMapper.apply(this.declarationRepository.save(toUpdate));
        }catch (TransactionSystemException e) {
            throw new UnprocessableDeclarationException("Declaration is not processable - constraint violation");

        }catch (DataIntegrityViolationException e){
            throw new UnprocessableDeclarationException("Declaration is not processable - data integrity");
        }
    }

    public boolean delete(Declaration declaration) {
        if(this.declarationRepository.existsById(declaration.getId())){
            this.declarationRepository.delete(declaration);
            return true;
        }else{
            return false;
        }
    }

    public List<Declaration> getAll() throws ResponseStatusException {
        List<Declaration> ss = StreamSupport.stream(this.declarationRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        if(ss.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Declarations table is empty");
        }

        return ss;
    }

    public boolean existsById(Long id){
        return this.declarationRepository.existsById(id);
    }

    public Optional<Declaration> findById(Long id){
        return this.declarationRepository.findById(id);
    }

    public void delete(Long id) throws DeclarationNotFoundException, ResponseStatusException {

        if(!this.existsById(id))
            throw new DeclarationNotFoundException(MessageFormat.format("Declaratie met id={0} niet gevonden", id));

        DeclarationModel modelToDelete = this.read(id);

        if(StateEnum.valueOf(modelToDelete.getStatus()) == StateEnum.INPROGRESS)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MessageFormat.format("Declaratie met id={0} is in behandeling", modelToDelete.getId()));

        this.declarationRepository.deleteById(modelToDelete.getId());
    }

    public void deleteAll() {
        this.declarationRepository.deleteAll();
    }
}
