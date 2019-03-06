package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.copyManager.CopyDeclaration;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.interfaces.IController;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


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
    @ResponseStatus(HttpStatus.OK)
    @Override
    public Declaration create(@RequestBody DeclarationModel declarationModel) {

        Declaration status = null;

        if(declarationModel.getId() == null){
            status = declarationService.create(CopyDeclaration.declarationModel_To_declaration(declarationModel));
        }

        return status;
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

    @GetMapping("/declaration/all")
    @ResponseStatus(HttpStatus.OK)
    @Override
    public List<DeclarationModel> getAll() {
        return this.declarationService.getAll().stream()
                .map(data -> CopyDeclaration.declaration_To_declarationModel(data))
                .collect(Collectors.toList());
    }
}
