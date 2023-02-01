package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.model.DeclarationFileModel;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.model.EmployeeModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.ContentUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import jakarta.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;


@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4300"}, exposedHeaders = "user")
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
        ContentUtils.cleanDelcarationValues(declarationModel);
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
                                                              @RequestParam("declarationfiles") MultipartFile [] declarationfiles)throws IOException {
        logger.info("Create declaration is been called");

        DeclarationModel declarationModel = new ObjectMapper().readValue(declaration, DeclarationModel.class);

        ContentUtils.cleanDelcarationValues(declarationModel);

        ContentUtils.transformMultiPart(declarationfiles, declarationModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(declarationService.create(declarationModel));
    }

    /***
     * Gets a declaration
     * @param id of the declaration
     * @return returns response
     */
    @GetMapping("/{id}")
    public ResponseEntity<DeclarationModel> getDeclaration(@PathVariable("id") Long id) {
        logger.info(MessageFormat.format("Declaration with id={0} is been called", id));

        return ResponseEntity.ok(declarationService.read(id));
    }

    // Met header
    @GetMapping("/testget/{id}")
    public ResponseEntity<DeclarationModel> getDeclaration(@PathVariable("id") Long id, @RequestHeader HttpHeaders headers) throws IOException {
        logger.info(MessageFormat.format("Declaration with id={0} is been called", id));

        EmployeeModel model = new ObjectMapper().readValue(headers.get("user").get(0), EmployeeModel.class);

        HttpHeaders responseHeaders = new HttpHeaders();
        String userInHeader = new ObjectMapper().writeValueAsString(model);
        responseHeaders.add("user", userInHeader);

        return ResponseEntity.ok().headers(responseHeaders).body(declarationService.read(id));
    }

    /***
     *
     * @param id of declaration to update
     * @param declaration which will be updated
     * @param declarationfiles the uploaded files
     * @return representative declarationmodel
     * @throws IOException
     */
    @PostMapping("/updateDeclaration/{id}")
    public ResponseEntity<DeclarationModel> updateDeclaration(@PathVariable("id") Long id, @RequestParam("declaration") String declaration,
                                                   @RequestParam("declarationfiles") MultipartFile [] declarationfiles) throws IOException {
        logger.info(MessageFormat.format("Update declaration with id={0} is been called", id));

        DeclarationModel declarationModel = new ObjectMapper().readValue(declaration, DeclarationModel.class);

        ContentUtils.cleanDelcarationValues(declarationModel);

        ContentUtils.transformMultiPart(declarationfiles, declarationModel);

        return ResponseEntity.ok(this.declarationService.update(id, declarationModel));
    }

    // Met Header
    @PostMapping("/testupdate/{id}")
    public ResponseEntity<DeclarationModel> updateDeclaration(@PathVariable("id") Long id, @RequestParam("declaration") String declaration,
                                                              @RequestParam("declarationfiles") MultipartFile [] declarationfiles,
                                                              @RequestHeader HttpHeaders headers) throws IOException {
        logger.info(MessageFormat.format("Update declaration with id={0} is been called", id));

        EmployeeModel model = new ObjectMapper().readValue(headers.get("user").get(0), EmployeeModel.class);

        HttpHeaders responseHeaders = new HttpHeaders();
        String userInHeader = new ObjectMapper().writeValueAsString(model);
        responseHeaders.add("user", userInHeader);

        DeclarationModel declarationModel = new ObjectMapper().readValue(declaration, DeclarationModel.class);

        ContentUtils.cleanDelcarationValues(declarationModel);

        ContentUtils.transformMultiPart(declarationfiles, declarationModel);

        return ResponseEntity.ok().headers(responseHeaders).body(this.declarationService.update(id, declarationModel, model));
    }

    /***
     * Deletes a declaration
     * @param id of the declaration to delete
     */
    @DeleteMapping("/{id}")
    public void deleteDeclaration(@PathVariable("id") Long id) {
        logger.info(MessageFormat.format("Delete declaration with id={0} is been called", id));
        this.declarationService.delete(id);
    }

    @DeleteMapping("/testdelete/{id}")
    public void deleteDeclaration(@PathVariable("id") Long id, @RequestHeader HttpHeaders headers) throws IOException {
        logger.info(MessageFormat.format("Delete declaration with id={0} is been called", id));

        EmployeeModel model = new ObjectMapper().readValue(headers.get("user").get(0), EmployeeModel.class);

        this.declarationService.delete(id, model);
    }

    @GetMapping
    public ResponseEntity<List<DeclarationModel>> getAllDeclarations() {
        logger.info("All declarations is been called");

        return ResponseEntity.ok(this.declarationService.getAll());
//        return new ResponseEntity<>(this.declarationService.getAll(), HttpStatus.OK);
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

    // Met header
    @GetMapping("/testgetall")
    public ResponseEntity<List<DeclarationModel>> getAllDeclarations(@RequestHeader HttpHeaders headers) throws IOException {
        System.out.println("Rol: " + headers.get("user"));

        EmployeeModel model = new ObjectMapper().readValue(headers.get("user").get(0), EmployeeModel.class);

        HttpHeaders responseHeaders = new HttpHeaders();
        String userInHeader = new ObjectMapper().writeValueAsString(model);
        responseHeaders.add("user", userInHeader);

        return ResponseEntity.ok().headers(responseHeaders).body(this.declarationService.getAll(model));
    }
}
