package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.DeclaratieApiApplication;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
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

    @Before
    public void setUp() throws Exception {
        declarationService.deleteAll();
    }

    @Test
    public void US7_TG1_DeMedewerkerKanEenDeclaratieIndienen_Semantisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void US7_TG2_DeMedewerkerKanEenDeclaratieIndienen_Semantisch() {
        try {
            // Prepare
            // Do call
            declarationService.create(null);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getMessage());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG1_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() throws JsonProcessingException {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void US7_TG2_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() throws JsonProcessingException {
        // Prepare
        String beschrijving = "Food";
        double bedrag = -10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US7_TG4_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() throws JsonProcessingException {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 110000;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US7_TG7_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() throws JsonProcessingException {
        // Prepare
        String beschrijving = "Food";

        for (int i = 0; i < 270; i++) {
            beschrijving += "" + 1;
        }

        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US7_TG9_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() throws JsonProcessingException {
        // Prepare
        String beschrijving = "";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        String toCreateJson = new ObjectMapper().writeValueAsString(new DeclarationModel(toCreate));

        File fileToSave = new File("./testimg/hobbit.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toCreateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/addDeclaration", requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void A22_SR13_GetAllDeclarationsEndpoint() {
        // Prepare
        Declaration toCreate = new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12);
        toCreate.setManId(15);

        declarationService.create(new DeclarationModel(toCreate));

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
    public void A32_SR8_ReadDeclarationEndpoint() {
        // Prepare
        Declaration toCreate = new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12);
        toCreate.setManId(15);

        toCreate.addDeclarationFile(new DeclarationFile("eenfoto.jpg", new byte[]{12,12,12}));

        DeclarationModel toRead = declarationService.create(new DeclarationModel(toCreate));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/"+toRead.getId(),
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getBody().getId()).isEqualTo(toRead.getId());
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void A32_SR8_ReadDeclarationEndpointReturnNotFound() {

        // Prepare
        Long toRead = -10L;

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.getForEntity(
                endpoint+"/"+toRead,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void US6_TG1_UpdateDeclarationEndpoint_Semantisch() throws IOException {
        // Prepare
        StateEnum currentState = StateEnum.REJECTED;
        Declaration toCreate = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Gasoline");

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(createdModel).isNotEqualTo(toUpdate.toDeclaration());
    }

    @Test
    public void US6_TG2_UpdateDeclarationEndpoint_Semantisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Gasoline");

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", null);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US6_TG4_UpdateDeclarationEndpoint_Semantisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(100L);
        toUpdate.setDescription("Gasoline");

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void US6_TG7_UpdateDeclarationEndpoint_Semantisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.INPROGRESS;
        Declaration toCreate = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Gasoline");

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
    }

    @Test
    public void US6_TG1_UpdateDeclarationEndpoint_Syntactisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Food");
        toUpdate.setAmount(10);

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void US6_TG2_UpdateDeclarationEndpoint_Syntactisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Food");
        toUpdate.setAmount(-10);

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US6_TG4_UpdateDeclarationEndpoint_Syntactisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("Food");
        toUpdate.setAmount(110000);

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US6_TG7_UpdateDeclarationEndpoint_Syntactisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());

        for (int i = 0; i < 270; i++) {
            toUpdate.setDescription(toUpdate.getDescription() + "" + 1);
        }

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US6_TG9_UpdateDeclarationEndpoint_Syntactisch() throws JsonProcessingException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        toCreate.setManId(15);

        DeclarationModel createdModel = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = new DeclarationModel(toCreate);
        toUpdate.setId(createdModel.getId());
        toUpdate.setDescription("");

        String toUpdateJson = new ObjectMapper().writeValueAsString(toUpdate);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        File fileToSave = new File("./testimg/hobbit.jpg");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("declaration", toUpdateJson);
        body.add("declarationfiles", fileToSave);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.postForEntity(
                endpoint+"/updateDeclaration/"+toUpdate.getId(), requestEntity,
                DeclarationModel.class);

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void US1_EenBestandUploaden() throws IOException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);

        File fileToSave = new File("./testimg/hobbit.jpg");

        byte [] fileBytes = Files.readAllBytes(fileToSave.toPath());

        toCreate.addDeclarationFile(new DeclarationFile(fileToSave.getName(), fileBytes));
        toCreate.addDeclarationFile(new DeclarationFile(fileToSave.getName(), fileBytes));

        // Do call
        DeclarationModel created = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel fetchedData = declarationService.read(created.getId());

        // Assert
        assertThat(fetchedData.getFiles().size()).isEqualTo(2);
    }

    @Test
    public void US3_EenGeuploadBestandVerwijderen() throws IOException {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration toCreate = new Declaration("Gasoline", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);

        File fileToSave = new File("./testimg/hobbit.jpg");

        byte [] fileBytes = Files.readAllBytes(fileToSave.toPath());

        toCreate.addDeclarationFile(new DeclarationFile(fileToSave.getName(), fileBytes));
        toCreate.addDeclarationFile(new DeclarationFile(fileToSave.getName(), fileBytes));

        // Do call
        DeclarationModel created = declarationService.create(new DeclarationModel(toCreate));

        DeclarationModel toUpdate = declarationService.read(created.getId());

        toUpdate.getFiles().remove(1);

        declarationService.update(toUpdate.getId(), toUpdate);

        DeclarationModel fetchedData = declarationService.read(created.getId());

        // Assert
        assertThat(fetchedData.getFiles().size()).isEqualTo(1);
    }

    @Test
    public void A33_SR10_DeleteDeclarationEndpoint() {
        // Prepare
        Declaration toCreate = new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12);
        toCreate.setManId(15);

        DeclarationModel toDelete = declarationService.create(new DeclarationModel(toCreate));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.exchange(endpoint+"/"+toDelete.getId(),
                HttpMethod.DELETE,
                null,
                DeclarationModel.class,
                new ParameterizedTypeReference<DeclarationModel>() {
                });

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void A33_SR10_DeleteDeclarationNotFoundEndpoint() {
        // Prepare
        Long toDelete = -10L;

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.exchange(endpoint+"/"+toDelete,
                HttpMethod.DELETE,
                null,
                DeclarationModel.class,
                new ParameterizedTypeReference<DeclarationModel>() {
                });

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void A33_SR10_DeleteDeclarationInProgressBadRequestEndpoint() {
        // Prepare
        Declaration toCreate = new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.INPROGRESS, 12);
        toCreate.setManId(15);

        DeclarationModel toDelete = declarationService.create(new DeclarationModel(toCreate));

        // Do call
        ResponseEntity<DeclarationModel> declarationModel = testRestTemplate.exchange(endpoint+"/"+toDelete.getId(),
                HttpMethod.DELETE,
                null,
                DeclarationModel.class,
                new ParameterizedTypeReference<DeclarationModel>() {
                });

        // Assert
        assertThat(declarationModel.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

}
