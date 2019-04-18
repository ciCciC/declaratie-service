package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationFileModel;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.ContentUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.MessageFormat;
import java.util.Collections;
import java.util.List;


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
    public ResponseEntity<DeclarationModel> createDeclaration(@RequestBody @Valid DeclarationModel declarationModel) {
        logger.info("Create declaration is been called");
        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);
        return new ResponseEntity<>(declarationService.create(declarationModel), HttpStatus.CREATED);
    }

    /***
     * Posts a new declaration with files
     * @param declaration declaration
     * @param declarationfiles files related to the declaration
     * @return declarationModel
     * @throws IOException
     */
    @PostMapping("/addDeclaration")
    public ResponseEntity<DeclarationModel> createDeclaration(@RequestParam("declaration") String declaration,
                                                              @RequestParam("declarationfiles") MultipartFile [] declarationfiles) throws IOException {
        logger.info("Create declaration is been called");

        DeclarationModel declarationModel = new ObjectMapper().readValue(declaration, DeclarationModel.class);

        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);

        for (MultipartFile fileModel: declarationfiles) {
            DeclarationFileModel tmp = new DeclarationFileModel();
            tmp.setFile(fileModel.getBytes());
            tmp.setFilename(fileModel.getOriginalFilename());
            declarationModel.addFile(tmp);
        }

        return new ResponseEntity<>(declarationService.create(declarationModel), HttpStatus.OK);
    }

    /***
     * Gets a declaration
     * @param id of the declaration
     * @return returns response
     */
    @GetMapping("/{id}")
    public ResponseEntity<DeclarationModel> getDeclaration(@PathVariable("id") Long id) {
        logger.info(MessageFormat.format("Declaration with id={0} is been called", id));

        return new ResponseEntity<>(declarationService.read(id), HttpStatus.OK);
    }

    @PostMapping("/updateDeclaration/{id}")
    public ResponseEntity<DeclarationModel> updateDeclaration(@PathVariable("id") Long id, @RequestParam("declaration") String declaration,
                                                   @RequestParam("declarationfiles") MultipartFile [] declarationfiles) throws IOException {
        logger.info(MessageFormat.format("Update declaration with id={0} is been called", id));

        DeclarationModel declarationModel = new ObjectMapper().readValue(declaration, DeclarationModel.class);

        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);

        String splitter [] = null;
        DeclarationFileModel tmp = null;
        String filename = null;

        for (MultipartFile fileModel: declarationfiles) {
            tmp = new DeclarationFileModel();
            splitter = fileModel.getOriginalFilename().split("#");
//            filename = fileModel.getOriginalFilename();

            if(!splitter[splitter.length-1].equals("noid")){
                tmp.setId(Long.parseLong(splitter[splitter.length-1]));
            }

            tmp.setFile(fileModel.getBytes());
//            tmp.setFilename(filename.substring(0, (filename.length() - splitter[splitter.length-1].length())-1));
            tmp.setFilename(splitter[0]);
            declarationModel.addFile(tmp);
        }

        return new ResponseEntity<>(this.declarationService.update(id, declarationModel), HttpStatus.OK);
    }

//    @PostMapping("/{id}")
//    public ResponseEntity<DeclarationModel> updateDeclaration(@PathVariable("id") Long id, @RequestBody DeclarationModel declarationModel) {
//        logger.info(MessageFormat.format("Update declaration with id={0} is been called", id));
//
//        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);
//
//        return new ResponseEntity<>(this.declarationService.update(id, declarationModel), HttpStatus.OK);
//    }

    /***
     * Deletes a declaration
     * @param id of the declaration to delete
     * @return returns response
     */
    @DeleteMapping("/{id}")
    public void deleteDeclaration(@PathVariable("id") Long id) {
        logger.info(MessageFormat.format("Delete declaration with id={0} is been called", id));
        this.declarationService.delete(id);
    }

    @GetMapping
    public ResponseEntity<List<DeclarationModel>> getAllDeclarations() {
        logger.info("All declarations is been called");

        return new ResponseEntity<>(this.declarationService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/paging/{from}/{to}")
    public ResponseEntity<List<DeclarationModel>> getPaging(@PathVariable("from") int from, @PathVariable("to") int to) {
        logger.info(MessageFormat.format("Declarations from={0} to={1} is been called", from, to));

//        List<DeclarationModel> listToReturn = this.declarationService.getAll();
//        Collections.sort(listToReturn);

//        for (int i = 0; i < listToReturn.size(); i++) {
//            System.out.println("dec: " + listToReturn.get(i).getDescription());
//        }

        return new ResponseEntity<>(this.declarationService.getAll().subList(from, to), HttpStatus.OK);
    }

//    @ExceptionHandler(UnprocessableDeclarationException.class)
//    private void handle(UnprocessableDeclarationException ex, @RequestBody DeclarationModel declarationModel) {
//        new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Declaratie is niet te verwerken", ex);
//    }

}
