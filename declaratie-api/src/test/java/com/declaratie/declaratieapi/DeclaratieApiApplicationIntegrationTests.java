package com.declaratie.declaratieapi;

import static org.junit.Assert.assertTrue;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.service.DeclarationService;
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
import java.util.List;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
		DeclaratieApiApplication.class,
		H2TestJpaConfig.class})
@ActiveProfiles("test")
public class DeclaratieApiApplicationIntegrationTests {
	/***
	 * Hier wordt de integratie test uitgevoerd.
	 * Voor de testen wordt gebruik gemaakt van H2 database.
	 */

	/***
	 * Dependency injection van DeclarationService
	 */
	@Autowired
	private DeclarationService declarationService;

	/***
	 * Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
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
		declarationService.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		Declaration addedDeclaration = declarationService.create(new Declaration("Dit is mijn description", date, 120,
				"Employee", "Manager", StateEnum.SUBMITTED, 12));

		/**
		 * Declaratie uit de in-memory database
		 */
		Declaration nieuweDeclaratie = declarationService
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
		assertEquals(declaratiesLijstSize, declarationService.getAll().size());

		System.out.println("ID -> Expected: " + nieuweDeclaratie.getId().longValue() + ",\t"
				+ "Actual: " + nieuweDeclaratie.getId().longValue());
	}

	/***
	 * Hier ligt de aandacht bij ophalen van declaraties.
	 *
	 * A5 = verwijzing naar de acceptatie ID in testrapportage
	 * SR13 = System requirement ID
	 */
	@Test
	public void A5_SR13_INTEGRATION_TEST_system_can_get_declaration_list(){
		System.out.println("Integratietest: A5_SR13_INTEGRATION_TEST_system_can_get_declaration_list");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		/**
		 * Toevoegen 5 elementen aan de in-memory database ter voorbereiding
		 */
		Stream.of("Benzine", "Eten", "Boek", "Administratie", "Computer").forEach(description -> {
			Declaration declaration = new Declaration(description, new Date(), 120,
					"Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
			declarationService.create(declaration);
		});

		List<Declaration> ophalenLijst = declarationService.getAll();

		int declaratiesLijstSize = 5;

		/**
		 * Controle declaratiesLijstSize
		 */
		assertEquals(declaratiesLijstSize, ophalenLijst.size());

		System.out.println("declaratiesLijstSize -> Expected: " + declaratiesLijstSize + ",\t"
				+ "Actual: " + ophalenLijst.size());
	}

}

