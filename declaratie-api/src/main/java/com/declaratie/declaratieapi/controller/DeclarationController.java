package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.interfaces.IController;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DeclarationController implements IController<DeclarationModel, Declaration> {

    private static final Logger logger = LoggerFactory.getLogger(DeclarationController.class);

    @Autowired
    private DeclarationService declarationService;

    @GetMapping("/declaration/index")
    public String index(){
        logger.info("Called index method.");
        return "Hello";
    }

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

        logger.info("Called create method.");

        if(declarationModel.getId() == null){
            status = declarationService.create(declarationModel.toDeclaration());
        }

        return status;
    }

    @Override
    public Declaration read(Long id) {
        return null;
    }

    @Override
    public Declaration update(Long id, DeclarationModel declarationModel) {
        return null;
    }

    @Override
    public Declaration delete(Long id) {
        return null;
    }

    @GetMapping("/declaration/all")
    @Override
    public ResponseEntity<List<DeclarationModel>> getAll() {
        logger.info("Returning all Declarations");
        return new ResponseEntity<List<DeclarationModel>>(this.declarationService.getAll().stream()
                .map(DeclarationModel::new)
                .collect(Collectors.toList()), HttpStatus.OK);
    }
}
