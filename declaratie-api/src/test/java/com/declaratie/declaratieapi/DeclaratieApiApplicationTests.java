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
public class DeclaratieApiApplicationTests {
	/***
	 * Hier wordt voornamelijk de integratie test uitgevoerd.
	 */

	/***
	 * Dependency injection van DeclarationRepository
	 */
	@Autowired
	private DeclarationRepository declarationRepository;


	/***
	 * Een standaard contextload test
	 */
	@Test
	public void contextLoads() {
		assertTrue("First test should be true", 1 == 1);
	}

	/***
	 * Hier wordt gebruik gemaakt van H2 database voor het uitvoeren van testen. Hier ligt de aandacht bij het toevoegen van een declaratie en opvragen van
	 * de zojuist toegevoegde declaratie. Dus om te zien of de declaratie wel wordt toegevoegd aan de database.
	 *
	 * A1 = verwijzing naar de acceptatie ID in testrapportage
	 */
	@Test
	public void A1_SaveAndRetreiveDeclaration_thenOK() {
		System.out.println("Integratietest: A1_SaveAndRetreiveDeclaration_thenOK");

		Date date = new GregorianCalendar(2019, 4, 30).getTime();

		Declaration declarationEntity = declarationRepository.save(new Declaration("Dit is mijn description", date, 120,
				"Employee", "Manager", StatusEnum.SUBMITTED, 12));

		Declaration foundEntity = declarationRepository
				.findById(declarationEntity.getId())
				.orElse(null);

		assertNotNull(foundEntity);
		assertEquals(declarationEntity.getId().longValue(), foundEntity.getId().longValue());

		System.out.println("Expected: " + declarationEntity.getId().longValue() + ",\t" + "Actual: " + foundEntity.getId().longValue());
	}

}

