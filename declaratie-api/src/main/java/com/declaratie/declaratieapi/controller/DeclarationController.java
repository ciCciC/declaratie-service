package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.CopyManager.CopyDeclaration;
import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.interfaces.IController;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DeclarationController implements IController<DeclarationModel, Declaration> {

    @Autowired
    private DeclarationService declarationService;

    /***
     * Posts a new declaration
     * @param declarationModel for creating a new declaration
     * @return returns created declaration
     */
    @PostMapping("/declaration/create")
    @ResponseStatus(HttpStatus.CREATED)
    @Override
    public Declaration create(@RequestBody DeclarationModel declarationModel) {

        Declaration status = CopyDeclaration.declarationModel_To_declaration(declarationModel);

//        if(declaration.getId() != null){
//            if(declarationRepository.existsById(declaration.getId())){
//                status = null;
//            }else{
//                status = declarationRepository.save(declaration);
//
//            }
//        }

        return status = declarationService.create(status);
    }

    @Override
    public Declaration read(long id) {
        return null;
    }

    @Override
    public Declaration update(long id, DeclarationModel declarationModel) {
        return null;
    }

    @Override
    public Declaration delete(long id) {
        return null;
    }
}
