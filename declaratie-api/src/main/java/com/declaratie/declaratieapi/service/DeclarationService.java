package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionSystemException;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class DeclarationService {

    private DeclarationRepository declarationRepository;

    private Function<Declaration, DeclarationModel> declarationMapper = declaration -> new DeclarationModel(declaration);

    @Autowired
    public DeclarationService(DeclarationRepository declarationRepository){
        this.declarationRepository = declarationRepository;
    }

    public Declaration create(Declaration declaration) throws UnprocessableDeclarationException {

        if(declaration == null)
            throw new UnprocessableDeclarationException("Declaration is not processable - null");

        try {
            return this.declarationRepository.save(declaration);
        }catch (TransactionSystemException e) {
            throw new UnprocessableDeclarationException("Declaration is not processable in repository - constraint violation");

        }catch (DataIntegrityViolationException e){
            throw new UnprocessableDeclarationException("Declaration is not processable in repository - data integrity");
        }
    }

    public Declaration createAndFlush(Declaration declaration) throws UnprocessableDeclarationException {

        try{
            return this.declarationRepository.saveAndFlush(declaration);
        }catch (DataIntegrityViolationException ex){
            throw new UnprocessableDeclarationException("Declaration is not processable in repository");
        }
    }

    public DeclarationModel read(Long id) {
        return declarationMapper.apply(this.declarationRepository.findById(id).get());
    }

    public Declaration update(Declaration declaration) {
        return null;
    }

    public boolean delete(long id) {
        return false;
    }

    public boolean delete(Declaration declaration) {
        if(this.declarationRepository.existsById(declaration.getId())){
            this.declarationRepository.delete(declaration);
            return true;
        }else{
            return false;
        }
    }

    public List<Declaration> getAll() throws DeclarationNotFoundException {

        if(this.declarationRepository.findAll().isEmpty()){
            throw new DeclarationNotFoundException("Declaration table is empty in repository");
        }

        List<Declaration> aa = this.declarationRepository.findAll();

        return aa;

//        return this.declarationRepository.findAll().stream()
//                .map(data -> {
//                    data.setFiles(this.declarationFileRepository.findAllByDeclaration_id(data.getId()));
//                    return data;
//                });
    }

    public boolean existsById(Long id){
        return this.declarationRepository.existsById(id);
    }

    public Optional<Declaration> findById(Long id){
        return this.declarationRepository.findById(id);
    }

    public void deleteAll() {
        this.declarationRepository.deleteAll();
    }
}
