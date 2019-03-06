package com.declaratie.declaratieapi;

import static org.junit.Assert.assertTrue;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.GregorianCalendar;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
		DeclaratieApiApplication.class,
		H2TestJpaConfig.class})
@ActiveProfiles("test")
public class DeclaratieApiApplicationIntegrationTests {
	/***
	 * Hier wordt voornamelijk de integratie test uitgevoerd.
	 */

	/***
	 * Dependency injection van DeclarationRepository
	 */
	@Autowired
	private DeclarationRepository declarationRepository;

	/***
	 * Hier wordt gebruik gemaakt van H2 database voor het uitvoeren van testen. Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 *
	 * A1 = verwijzing naar de acceptatie ID in testrapportage
	 * SR11 = System requirement ID
	 */
	@Test
	public void A1_SR11_INTEGRATION_TEST_create_saveAndRetrieveDeclaration() {
		System.out.println("Integratietest: A1_INTEGRATION_TEST_create_saveAndRetrieveDeclaration");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationRepository.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		Declaration addedDeclaration = declarationRepository.save(new Declaration("Dit is mijn description", date, 120,
				"Employee", "Manager", StatusEnum.SUBMITTED, 12));


		/**
		 * Declaratie uit de in-memory database
		 */
		Declaration nieuweDeclaratie = declarationRepository
				.findById(addedDeclaration.getId())
				.orElse(null);

		int declaratiesLijstSize = 1;

		/***
		 * Controle op null waarde
		 */
		assertNotNull(nieuweDeclaratie);

		/**
		 * Controle op Id
		 */
		assertEquals(addedDeclaration.getId().longValue(), nieuweDeclaratie.getId().longValue());

		/**
		 * Controle declaratiesLijstSize
		 */
		assertEquals(declaratiesLijstSize, declarationRepository.findAll().size());

		System.out.println("ID -> Expected: " + nieuweDeclaratie.getId().longValue() + ",\t" + "Actual: " + nieuweDeclaratie.getId().longValue());
	}

}

