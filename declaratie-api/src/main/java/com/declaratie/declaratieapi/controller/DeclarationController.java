package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.ContentUtils;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/declarations")
public class DeclarationController {

    private static final Logger logger = LoggerFactory.getLogger(DeclarationController.class);

    private DeclarationService declarationService;

    @Autowired
    public DeclarationController(DeclarationService declarationService){
        this.declarationService = declarationService;
    }

    /***
     * Posts a new declaration
     * @param declarationModel for creating a new declaration
     * @return returns created declaration
     */
    @PostMapping("/")
    public ResponseEntity<DeclarationModel> create(@RequestBody DeclarationModel declarationModel) throws UnprocessableDeclarationException {
        logger.info(this.callMessage("create()"));

        System.out.println("BEFORE CHECK: " + declarationModel);

        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);

        System.out.println("AFTER CHECK: " + declarationModel);

        Declaration toSave = declarationModel.toDeclaration();

        return new ResponseEntity<>(declarationService.create(toSave), HttpStatus.CREATED);
    }

    /***
     * Gets a declaration
     * @param id for getting the declaration
     * @return returns response
     */
    @GetMapping("/read/{id}")
    public DeclarationModel read(@PathVariable("id") Long id) throws DeclarationNotFoundException {
        return declarationService.read(id);
    }

//    @GetMapping("/readme/{id}")
//    public DeclarationModel readMe(@PathVariable("id") Long id) {
//        return declarationService.readMe(id);
//    }

    @PostMapping("/{id}")
    public ResponseEntity<DeclarationModel> update(@PathVariable("id") Long id, @RequestBody DeclarationModel declarationModel)
            throws UnprocessableDeclarationException, DeclarationNotFoundException {

        return new ResponseEntity<>(this.declarationService.update(id, declarationModel), HttpStatus.OK);
    }

    /***
     * Deletes a declaration
     * @param id for getting the declaration
     * @return returns response
     */
    @GetMapping("/delete/{id}")
    public void delete(@PathVariable("id") Long id) throws DeclarationNotFoundException, ResponseStatusException {
        this.declarationService.delete(id);
    }

    @GetMapping()
    public ResponseEntity<List<DeclarationModel>> getAll() throws ResponseStatusException {

        logger.info(this.callMessage("getAll()"));

        logger.info("Returning declarations");

        return new ResponseEntity<>(this.declarationService.getAll().stream()
                .map(DeclarationModel::new)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @ExceptionHandler(UnprocessableDeclarationException.class)
    private void handle(UnprocessableDeclarationException ex, @RequestBody DeclarationModel declarationModel) {
        new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Declaratie is niet te verwerken", ex);
    }

    private String callMessage(String methodname){
        return "Called -> DeclarationController : " + methodname;
    }

}
