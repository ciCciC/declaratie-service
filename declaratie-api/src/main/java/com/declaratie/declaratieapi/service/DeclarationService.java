package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.interfaces.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeclarationService implements IService<Declaration> {

    private DeclarationRepository declarationRepository;

    @Autowired
    public DeclarationService(DeclarationRepository declarationRepository){
        this.declarationRepository = declarationRepository;
    }

    @Override
    public Declaration create(Declaration declaration) throws UnprocessableDeclarationException {

        try{
            return this.declarationRepository.save(declaration);
        }catch (DataIntegrityViolationException ex){
            throw new UnprocessableDeclarationException("Declaration is not processable in repository");
        }
    }

    public Declaration createAndFlush(Declaration declaration) throws UnprocessableDeclarationException {

        try{
            return this.declarationRepository.saveAndFlush(declaration);
        }catch (DataIntegrityViolationException ex){
            throw new UnprocessableDeclarationException("Declaration is not processable in repository");
        }
    }

    @Override
    public Declaration read(long id) {
        return null;
    }

    @Override
    public Declaration update(Declaration declaration) {
        return null;
    }

    @Override
    public boolean delete(long id) {
        return false;
    }

    @Override
    public boolean delete(Declaration declaration) {
        if(this.declarationRepository.existsById(declaration.getId())){
            this.declarationRepository.delete(declaration);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public List<Declaration> getAll() throws DeclarationNotFoundException {

        if(this.declarationRepository.findAll().isEmpty()){
            throw new DeclarationNotFoundException("Declarations not found in repository");
        }
        return this.declarationRepository.findAll();
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
