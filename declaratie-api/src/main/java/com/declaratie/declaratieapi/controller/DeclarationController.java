package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.interfaces.IController;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.ContentUtils;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DeclarationController implements IController<DeclarationModel, Long> {

    private static final Logger logger = LoggerFactory.getLogger(DeclarationController.class);

    private DeclarationService declarationService;

    @Autowired
    public DeclarationController(DeclarationService declarationService){
        this.declarationService = declarationService;
    }

    @GetMapping("/declaration/index/{id}")
    public ResponseEntity<DeclarationModel> index(@PathVariable("id") String id) {
        /**
         * Test het uitfilteren van de XSS injection.
         */

        logger.info("Called index method.");

        Declaration declaration = new Declaration("Lolz", new Date(), 120,
                "Employee", "<script>alert(hack me m8)</script>", StateEnum.SUBMITTED, 12);

        DeclarationModel aa = new DeclarationModel(declaration);

        // Hier wordt het uitgefilterd!!!
        ContentUtils.CLEAN_DELCARATION_VALUES(aa);

        declaration = aa.toDeclaration();

        try {
            declaration = this.declarationService.create(declaration);
        }catch(UnprocessableDeclarationException ex){
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Declaration is unprocessable", ex);
        }

        return new ResponseEntity<DeclarationModel>(new DeclarationModel(declaration), HttpStatus.CREATED);
    }

    /***
     * Posts a new declaration
     * @param declarationModel for creating a new declaration
     * @return returns created declaration
     */
    @PostMapping("/declaration/create")
    @Override
    public ResponseEntity<DeclarationModel> create(@RequestBody DeclarationModel declarationModel) {
        logger.info(this.callMessage("create()"));

        ContentUtils.CLEAN_DELCARATION_VALUES(declarationModel);

        Declaration toSave = declarationModel.toDeclaration();

        try {
            return new ResponseEntity<>(new DeclarationModel(declarationService.create(toSave)), HttpStatus.CREATED);
        } catch (UnprocessableDeclarationException ex) {
            logger.warn( "Exception raised create Declaration REST Call {0}", ex);
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Declaration is unprocessable", ex);
        }
    }

    /***
     * Gets a declaration
     * @param id for getting the declaration
     * @return returns declaration
     */
    @Override
    public ResponseEntity<DeclarationModel> read(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<DeclarationModel> update(Long id, DeclarationModel declarationModel) {
        return null;
    }

    @Override
    public ResponseEntity<DeclarationModel> delete(Long id) {
        return null;
    }

    @GetMapping("/declaration/all")
    @Override
    public ResponseEntity<List<DeclarationModel>> getAll() {
        logger.info(this.callMessage("getAll()"));

        try{
            logger.info("Returning declarations");
            return new ResponseEntity<>(this.declarationService.getAll().stream()
                    .map(DeclarationModel::new)
                    .collect(Collectors.toList()), HttpStatus.OK);
        }catch(DeclarationNotFoundException ex){
            logger.info("No declarations found");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Declarations not found", ex);
        }
    }

    @GetMapping("/declaration/all/{id}")
    public ResponseEntity<List<DeclarationModel>> getAll(@PathVariable("id") int id) {
        logger.info(this.callMessage("getAll()"));

        if(id == 0){
            try{
                logger.info("Returning declarations");
                return new ResponseEntity<>(this.declarationService.getAll().stream()
                        .map(DeclarationModel::new)
                        .collect(Collectors.toList()), HttpStatus.OK);
            }catch(DeclarationNotFoundException ex){
                logger.info("No declarations found");
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Declarations not found", ex);
            }
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Declarations not found");
        }
    }

    private String callMessage(String methodname){
        return "Called -> DeclarationController : " + methodname;
    }

}
