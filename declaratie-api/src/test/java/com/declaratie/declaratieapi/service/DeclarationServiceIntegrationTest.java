package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.DeclaratieApiApplication;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        DeclaratieApiApplication.class,
        H2TestJpaConfig.class},
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class DeclarationServiceIntegrationTest {

    /***
     * Hier wordt de integratie test uitgevoerd.
     * Voor de testen wordt gebruik gemaakt van H2 database.
     *
     * US = User story als testbasis
     * TG = verwijst naar het testgeval van de testbasis in het testrapport
     */

    /***
     * Dependency injection van DeclarationService
     */
    @Autowired
    private DeclarationService declarationService;

    @Test
    public void read() {
    }
}
