package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import com.declaratie.declaratieapi.util.H2TestJpaConfig;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
		DeclaratieApiApplication.class,
		H2TestJpaConfig.class},
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class DeclaratieApiApplicationIntegrationTests {

	/***
	 * Hier wordt de integratie test uitgevoerd.
	 * Voor de testen wordt gebruik gemaakt van H2 database.
	 *
	 * A = verwijst naar de acceptatie ID in het testrapport
	 * SR = System requirement ID
	 * TG = verwijst naar het testgeval in het testrapport
	 */

	/***
	 * Dependency injection van DeclarationService
	 */
	@Autowired
	private DeclarationService declarationService;

	/***
	 * Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 */
	@Test
	public void A11_SR11_TG1_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A11_SR11_TG1_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		DeclarationModel addedDeclaration = null;

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
		}catch (ResponseStatusException ex){
			System.out.println("Declaration lijst bestaat niet in de database");
		}

		System.out.println("ID -> Expected: " + nieuweDeclaratie.getId().longValue() + ",\t"
				+ "Actual: " + nieuweDeclaratie.getId().longValue());
	}

	/***
	 * Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 */
	@Test
	public void A11_SR11_TG2_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A11_SR11_TG2_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		/**
		 * Nieuwe declaratie
		 */
		DeclarationModel nieuweDeclaratie = null;

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
	 */
	@Test
	public void A11_SR11_TG3_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen() {
		System.out.println("Integratietest: A11_SR11_TG3_INTEGRATION_TEST_deMedewerkerKanEenDeclaratieToevoegen");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		/**
		 * Nieuwe declaratie
		 */
		DeclarationModel nieuweDeclaratie = null;

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
		}catch (ResponseStatusException ex){
			System.out.println("Declaration lijst bestaat niet in de database");
		}

		System.out.println("ID -> Expected: " + declaratiesLijstSize + ",\t"
				+ "Actual: " + actualsize);
	}

	/***
	 * Hier ligt de aandacht bij ophalen van declaraties.
	 */
	@Test
	public void A22_SR13_INTEGRATION_TEST_system_can_get_declaration_list(){
		System.out.println("Integratietest: A22_SR13_INTEGRATION_TEST_system_can_get_declaration_list");

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
		}catch (ResponseStatusException ex){
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

	/***
	 * Hier ligt de aandacht bij het ophalen van een declaratie.
	 */
	@Test
	public void A32_SR8_TG1_INTEGRATION_TEST_system_can_get_declaration(){
		System.out.println("Integratietest: A32_SR8_TG1_INTEGRATION_TEST_system_can_get_declaration");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Declaration toSave = new Declaration("Dit is mijn description", new Date(), 120,
				"Employee", "Manager", StateEnum.SUBMITTED, 12);
		toSave.addDeclarationFile(new DeclarationFile("bestfoto.jpg", new byte[]{12, 22}));

		DeclarationModel toRead = null;

		/**
		 * Toevoegen 1 elementen aan de in-memory database ter voorbereiding
		 */
		try {
			toRead = declarationService.create(toSave);
		} catch (UnprocessableDeclarationException e) {
			e.printStackTrace();
		}

		DeclarationModel declaratie_bestaat = null;

		try {
			declaratie_bestaat = declarationService.read(toRead.getId());
		} catch (DeclarationNotFoundException e) {
			System.out.println("Message: " + e.getMessage());
		}

		/**
		 * Controle declaratie
		 */
		assertNotNull(declaratie_bestaat);
	}

	/***
	 * Hier ligt de aandacht bij het ophalen van een declaratie.
	 */
	@Test
	public void A32_SR8_TG2_INTEGRATION_TEST_system_can_get_declaration(){
		System.out.println("Integratietest: A32_SR8_TG2_INTEGRATION_TEST_system_can_get_declaration");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Long toRead = 100L;

		DeclarationModel declaratie_bestaat = null;

		try {
			declaratie_bestaat = declarationService.read(toRead);
		} catch (DeclarationNotFoundException e) {
			System.out.println("Message: " + e.getMessage());
		}

		/**
		 * Controle declaratie
		 */
		assertNull(declaratie_bestaat);
	}

	/***
	 * Hier ligt de aandacht bij het verwijderen van een declaratie.
	 */
	@Test
	public void A33_SR10_TG1_INTEGRATION_TEST_system_can_delete_declaration(){
		System.out.println("Integratietest: A33_SR10_TG1_INTEGRATION_TEST_system_can_delete_declaration");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Declaration toSave = new Declaration("Dit is mijn description", new Date(), 120,
				"Employee", "Manager", StateEnum.SUBMITTED, 12);
		toSave.addDeclarationFile(new DeclarationFile("bestfoto.jpg", new byte[]{12, 22}));

		DeclarationModel toDelete = null;
		boolean declaratie_bestaat = false;

		/**
		 * Toevoegen 1 elementen aan de in-memory database ter voorbereiding
		 */
		try {
			toDelete = declarationService.create(toSave);
		} catch (UnprocessableDeclarationException e) {
			e.printStackTrace();
		}

		/**
		 * Controle verwijdering declaratie
		 */
		try {
			declarationService.delete(toDelete.getId());
			System.out.println("Message: declaratie is verwijderd");
			declaratie_bestaat = true;
		} catch (DeclarationNotFoundException e) {
			System.out.println("Message: " + e.getMessage());
		}

		assertTrue(declaratie_bestaat);
	}

	/***
	 * Hier ligt de aandacht bij het verwijderen van een declaratie.
	 */
	@Test
	public void A33_SR10_TG2_INTEGRATION_TEST_system_can_delete_declaration(){
		System.out.println("Integratietest: A33_SR10_TG2_INTEGRATION_TEST_system_can_delete_declaration");

		Long toDelete = -100L;
		boolean declaratie_bestaat = false;

		/**
		 * Controle verwijdering declaratie
		 */
		try {
			declarationService.delete(toDelete);
			System.out.println("Message: declaratie is verwijderd");
			declaratie_bestaat = true;
		} catch (DeclarationNotFoundException e) {
			System.out.println("Message: " + e.getMessage());
		}

		assertFalse(declaratie_bestaat);
	}

	/***
	 * Hier ligt de aandacht bij het verwijderen van een declaratie.
	 */
	@Test
	public void A33_SR10_INTEGRATION_TEST_system_can_delete_declaration_shouldReturnBadRequest(){
		System.out.println("Integratietest: A33_SR10_INTEGRATION_TEST_system_can_delete_declaration_shouldReturnBadRequest");

		/**
		 * Dit om de initialisatie in DeclaratieApiApplication class eerst te verwijderen.
		 */
		declarationService.deleteAll();

		Declaration toSave = new Declaration("Dit is mijn description", new Date(), 120,
				"Employee", "Manager", StateEnum.INPROGRESS, 12);
		toSave.addDeclarationFile(new DeclarationFile("bestfoto.jpg", new byte[]{12, 22}));

		DeclarationModel toDelete = null;
		boolean declaratie_bestaat = false;

		/**
		 * Toevoegen 1 elementen aan de in-memory database ter voorbereiding
		 */
		try {
			toDelete = declarationService.create(toSave);
		} catch (UnprocessableDeclarationException e) {
			e.printStackTrace();
		}

		/**
		 * Controle verwijdering declaratie
		 */
		try {
			declarationService.delete(toDelete.getId());
			System.out.println("Message: declaratie is verwijderd");
			declaratie_bestaat = true;
		} catch (ResponseStatusException | DeclarationNotFoundException e) {
			System.out.println("Message: " + e.getMessage());
		}

		assertFalse(declaratie_bestaat);
	}

}

