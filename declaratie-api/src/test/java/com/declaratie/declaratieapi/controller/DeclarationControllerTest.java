package com.declaratie.declaratieapi.controller;

import com.declaratie.declaratieapi.DeclaratieApiApplication;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

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
    public void testMyEndpoint() {

        ResponseEntity<List<DeclarationModel>> declaration = testRestTemplate
                .exchange(endpoint,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<DeclarationModel>>() {
        });

//        ResponseEntity<String> declaration = testRestTemplate.getForEntity(endpoint, String.class);
//        System.out.printf("declaration : %s", declaration);
       assertThat(declaration.getBody()).size().isEqualTo(8);

    }

}
