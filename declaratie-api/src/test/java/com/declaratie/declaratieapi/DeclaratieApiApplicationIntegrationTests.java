package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Assert;
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
	 * TG2 = verwijzing naar het testgeval in het testrapport
	 */
	@Test
	public void A1_SR11_TG1_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A1_SR11_TG1_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		Declaration addedDeclaration = null;

		try {
			addedDeclaration = declarationService.create(new Declaration("Dit is mijn description", date, 120,
					"Employee", "Manager", StateEnum.SUBMITTED, 12));
		}catch (UnprocessableDeclarationException ex){
			System.out.println("Declaratie kan niet aangemaakt worden.");
		}

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
		try{
			assertEquals(declaratiesLijstSize, declarationService.getAll().size());
		}catch (DeclarationNotFoundException ex){
			System.out.println("Declaration lijst bestaat niet in de database");
		}

		System.out.println("ID -> Expected: " + nieuweDeclaratie.getId().longValue() + ",\t"
				+ "Actual: " + nieuweDeclaratie.getId().longValue());
	}

	/***
	 * Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 *
	 * A1 = verwijzing naar de acceptatie ID in testrapportage
	 * SR11 = System requirement ID
	 * TG2 = verwijzing naar het testgeval in het testrapport
	 */
	@Test
	public void A1_SR11_TG2_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A1_SR11_TG2_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		/**
		 * Nieuwe declaratie
		 */
		Declaration nieuweDeclaratie = null;

		try {
			nieuweDeclaratie = declarationService.create(null);

		}catch (UnprocessableDeclarationException ex){
			System.out.println("Declaratie kan niet aangemaakt worden.");
		}

		/***
		 * Controle op null waarde
		 */
		Assert.assertNull(nieuweDeclaratie);

		System.out.println("ID -> Expected: null" + ",\t"
				+ "Actual: " + String.valueOf(nieuweDeclaratie));
	}

	/***
	 * Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 *
	 * A1 = verwijzing naar de acceptatie ID in testrapportage
	 * SR11 = System requirement ID
	 * TG3 = verwijzing naar het testgeval in het testrapport
	 */
	@Test
	public void A1_SR11_TG3_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A1_SR11_TG3_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		Declaration nieuweDeclaratie = null;

		try {
			nieuweDeclaratie = declarationService.create(new Declaration("Dit is mijn description", date, 120,
					"Employee", "Manager", StateEnum.SUBMITTED, 12));
		}catch (UnprocessableDeclarationException ex){
			System.out.println("Declaratie kan niet aangemaakt worden.");
		}

		int declaratiesLijstSize = 1;
		int actualsize = 0;

		/***
		 * Controle op null waarde
		 */
		assertNotNull(nieuweDeclaratie);

		/**
		 * Controle declaratiesLijstSize
		 */
		try{
			actualsize = declarationService.getAll().size();
			assertEquals(declaratiesLijstSize, actualsize);
		}catch (DeclarationNotFoundException ex){
			System.out.println("Declaration lijst bestaat niet in de database");
		}

		System.out.println("ID -> Expected: " + declaratiesLijstSize + ",\t"
				+ "Actual: " + actualsize);
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
			try {
				declarationService.create(declaration);
			}catch (UnprocessableDeclarationException ex){
				System.out.println("Declaratie kan niet aangemaakt worden.");
			}
		});

		List<Declaration> ophalenLijst = null;

		try{
			ophalenLijst = declarationService.getAll();
		}catch (DeclarationNotFoundException ex){
			System.out.println("Declaration lijst bestaat niet in de database");
		}

		int declaratiesLijstSize = 5;

		/**
		 * Controle declaratiesLijstSize
		 */
		assertEquals(declaratiesLijstSize, ophalenLijst.size());

		System.out.println("declaratiesLijstSize -> Expected: " + declaratiesLijstSize + ",\t"
				+ "Actual: " + ophalenLijst.size());
	}

}

