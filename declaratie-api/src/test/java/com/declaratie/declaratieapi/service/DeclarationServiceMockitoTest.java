package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;

import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import org.hamcrest.core.IsNull;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class DeclarationServiceMockitoTest {

    @Mock
    private DeclarationRepository declarationRepository;

    @InjectMocks
    private DeclarationService declarationService;

    @BeforeEach
    public void setUp() throws Exception {
        System.out.println("Before");
        MockitoAnnotations.initMocks(this);
    }

    /***
     * Tests the return of a new declaration
     * A1 = verwijzing naar de acceptatie ID in het testrapport
     * SR11 = Systeem requirement ID
     */
    @Test
    public void A1_SR11_deMedewerkerKanEenDeclaratieToevoegen(){
        System.out.println("Test: A1_SR11_deMedewerkerKanEenDeclaratieToevoegen");

        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(new Declaration());

        try{

            assertThat(this.declarationService.create(new Declaration()), is(notNullValue()));

        }catch (UnprocessableDeclarationException ex){
            System.out.println("Declaratie kan niet aangemaakt worden.");
        }
    }

    /***
     * Tests the value of the actual and expected variables
     * A2 = verwijzing naar de acceptatie ID in het testrapport
     * SR11 = Systeem requirement
     * TG8 = verwijzing naar het testgeval in het testrapport
     */
    @Test
    public void A2_SR11_TG1_create_actual_values_expected_values() {

        System.out.println("Test: A2_SR11_TG1_create_actual_values_expected_values");

        /***
         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
         */

        Declaration dummyObject = spy(Declaration.class);
        dummyObject.setDescription("auto");
        dummyObject.setAmount(1500);
        dummyObject.setDate(new GregorianCalendar(2019, 4, 30).getTime());
        dummyObject.setStatusEnum(StateEnum.SUBMITTED);
        dummyObject.setEmpComment("Wel");
        dummyObject.setManComment("Ja");
        dummyObject.setEmpId(2);

        Declaration actualObject = spy(Declaration.class);
        actualObject.setDescription("eten");
        actualObject.setAmount(1000);
        actualObject.setDate(new GregorianCalendar(2019, 4, 20).getTime());
        actualObject.setStatusEnum(StateEnum.REJECTED);
        actualObject.setEmpComment("Nee");
        actualObject.setManComment("Niet");
        actualObject.setEmpId(1);

        when(declarationRepository.save(dummyObject)).thenReturn(actualObject);

        Declaration result = null;

        try{
            result = declarationService.create(dummyObject);
        }catch (UnprocessableDeclarationException ex){
            System.out.println("Declaratie kan niet aangemaakt worden.");
        }

        assertNotEquals(dummyObject.getDescription(), result.getDescription());
        assertNotEquals(dummyObject.getAmount(), result.getAmount(), 0);
        assertNotEquals(dummyObject.getDate(), result.getDate());
        assertNotEquals(dummyObject.getStatusEnum(), result.getStatusEnum());
        assertNotEquals(dummyObject.getEmpComment(), result.getEmpComment());
        assertNotEquals(dummyObject.getManComment(), result.getManComment());
        assertNotEquals(dummyObject.getEmpId(), result.getEmpId());
    }

    /***
     * Tests the value of the actual and expected variables
     * A2 = verwijzing naar de acceptatie ID in het testrapport
     * SR11 = Systeem requirement
     * TG8 = verwijzing naar het testgeval in het testrapport
     */
    @Test
    public void A2_SR11_TG8_create_actual_values_expected_values() {

        System.out.println("Test: A2_SR11_TG8_create_actual_values_expected_values");

        /***
         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
         */

        Date date = new GregorianCalendar(2019, 4, 30).getTime();

        Declaration dummyObject = spy(Declaration.class);
        dummyObject.setDescription("auto");
        dummyObject.setAmount(1500);
        dummyObject.setDate(date);
        dummyObject.setStatusEnum(StateEnum.SUBMITTED);
        dummyObject.setEmpComment("Wel");
        dummyObject.setManComment("Ja");
        dummyObject.setEmpId(2);

        when(declarationRepository.save(dummyObject)).thenReturn(dummyObject);

        Declaration result = null;

        try{
            result = declarationService.create(dummyObject);
        }catch (UnprocessableDeclarationException ex){
            System.out.println("Declaratie kan niet aangemaakt worden.");
        }

        assertEquals("auto", result.getDescription());
        assertEquals(1500, result.getAmount(), 0);
        assertEquals(date, result.getDate());
        assertEquals(StateEnum.SUBMITTED, result.getStatusEnum());
        assertEquals("Wel", result.getEmpComment());
        assertEquals("Ja", result.getManComment());
        assertEquals(2, result.getEmpId());
    }

//    @Test
//    public void read() {
//    }
//
//    @Test
//    public void update() {
//    }
//
//    @Test
//    public void delete() {
//    }

    /***
     * Tests the value of the actual and expected variables
     * A5 = verwijzing naar de acceptatie ID in testrapportage
     * SR13 = Systeem requirement
     * TG = testgeval 1
     */
    @Test
    public void A5_SR13_TG1_system_can_get_declaration_list() {
        System.out.println("Test: A5_SR13_TG1_system_can_get_declaration_list");

        List<Declaration> declarationsList = new ArrayList<>();

        Stream.of("Benzine", "Eten", "Boek", "Administratie", "Computer").forEach(description -> {
            Declaration declaration = new Declaration(description, new Date(), 120,
                    "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
            declarationsList.add(declaration);
        });

        when(declarationRepository.findAll()).thenReturn(declarationsList);

        List<Declaration> result = null;

        try{
            result = declarationService.getAll();
        }catch (DeclarationNotFoundException ex){
            System.out.println("Declaratie lijst bestaat niet.");
        }

        int expected = 5;

        assertEquals(expected, result.size());

        this.printStatus(""+expected, ""+result.size());
    }

    /***
     * Tests the value of the actual and expected variables
     * A5 = verwijzing naar de acceptatie ID in testrapportage
     * SR13 = Systeem requirement
     * TG = testgeval 2
     */
    @Test
    public void A5_SR13_TG2_get_declaration_list_is_null() {
        System.out.println("Test: A5_SR13_TG2_get_declaration_list_is_null");

        when(declarationRepository.findAll()).thenReturn(null);

        boolean result = true;

        try{
            declarationService.getAll();
            result = false;
        }catch (Exception ex){
            System.out.println("Declaratie lijst bestaat niet.");
        }

        boolean expected = true;

        assertEquals(expected, result);

        this.printStatus(""+expected, ""+result);
    }

    /***
     * Voor het printen van de expected en actual waardes
     * @param expected voor expected waarde
     * @param actual voor actual waarde
     */
    private void printStatus(String expected, String actual){
        System.out.println("Expected: " + expected + ",\t" + "Actual: " + actual);
    }
}
