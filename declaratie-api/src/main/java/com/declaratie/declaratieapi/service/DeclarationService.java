package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.interfaces.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeclarationService implements IService<Declaration> {

    @Autowired
    private DeclarationRepository declarationRepository;

    @Override
    public Declaration create(Declaration declaration) {
        return this.declarationRepository.save(declaration);
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
        return false;
    }

    @Override
    public List<Declaration> getAll() {
        return this.declarationRepository.findAll();
    }

    public boolean existsById(Long id){
        return this.declarationRepository.existsById(id);
    }

    public Optional<Declaration> findById(Long id){
        return this.declarationRepository.findById(id);
    }

    public void deleteAll(){
        this.declarationRepository.deleteAll();
    }
}
