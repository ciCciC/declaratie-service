package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.DeclaratieApiApplication;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.*;


@SpringBootTest(classes = {
        DeclaratieApiApplication.class,
        H2TestJpaConfig.class},
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class DeclarationControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private DeclarationService declarationService;

    private static String endpoint = "/api/declarations";

    @Test
    public void A22_SR13_GetAllDeclarationsEndpoint() throws UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        declarationService.create(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12));

        // Call
        ResponseEntity<List<DeclarationModel>> declaration = testRestTemplate
                .exchange(endpoint,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<DeclarationModel>>() {
        });

        // Assert
        assertThat(declaration.getBody()).size().isEqualTo(1);

    }

    @Test
    public void A32_SR8_ReadDeclarationEndpoint() throws UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        DeclarationModel toRead = declarationService.create(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12));

        System.out.println("ID: " + toRead.getId());

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/read/"+toRead.getId(),
                DeclarationModel.class);

        System.out.println("GOT ID:" + declarationModel.getBody().getId());

        // Assert
        assertThat(declarationModel.getBody().getId()).isEqualTo(toRead.getId());
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void A32_SR8_ReadDeclarationEndpointReturnNotFound() throws UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        Long toRead = -10L;

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/read/"+toRead,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void A32_SR8_ReadDeclarationDoesNotExistEndpoint() throws UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        Long toRead = 100L;

        declarationService.create(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/read/"+toRead,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void A33_SR10_DeleteDeclarationEndpoint() throws DeclarationNotFoundException, UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        DeclarationModel toDelete = declarationService.create(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/delete/"+toDelete.getId(),
                DeclarationModel.class);

        System.out.println(MessageFormat.format("Status: {0}", declarationModel.getStatusCode()));

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void A33_SR10_DeleteDeclarationNotFoundEndpoint() {

        declarationService.deleteAll();

        // Prepare
        Long toDelete = -10L;

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/delete/"+toDelete,
                DeclarationModel.class);

        System.out.println(MessageFormat.format("Status: {0}", declarationModel.getStatusCode()));

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void A33_SR10_DeleteDeclarationInProgressBadRequestEndpoint() throws ResponseStatusException, UnprocessableDeclarationException {

        declarationService.deleteAll();

        // Prepare
        DeclarationModel toDelete = declarationService.create(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.INPROGRESS, 12));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/delete/"+toDelete.getId(),
                DeclarationModel.class);

        System.out.println(MessageFormat.format("Status: {0}", declarationModel.getStatusCode()));

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

}
