package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;

import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
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
public class DeclarationServiceTest {

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
     * SR11 = Systeem requirement ID
     */
    @Test
    public void A1_SR11_create_returnsNewDeclaration(){
        System.out.println("Test: A1_SR11_create_returnsNewDeclaration");
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(new Declaration());

        Declaration declaration = new Declaration();

        try{
            this.declarationService.create(declaration);
            assertThat(this.declarationService.create(declaration), is(notNullValue()));
        }catch (UnprocessableDeclarationException ex){
            System.out.println("Declaratie kan niet aangemaakt worden.");
        }
    }

    /***
     * Tests if the new declaration has been added
     * A1 = verwijzing naar de acceptatie ID in testrapportage
     * SR11 = Systeem requirement ID
     */
    @Test
    public void A1_SR11_create_then_check_list_size(){
        System.out.println("Test: A1_SR11_create_then_check_list_size");

        List<Declaration> declarationList = new ArrayList<>();
        declarationList.add(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StateEnum.SUBMITTED, 12));

        when(declarationRepository.findAll()).thenReturn(declarationList);

        int result = 0;

        try{
            result = declarationService.getAll().size();
        }catch (DeclarationNotFoundException ex){
            System.out.println("Declaratie lijst bestaat niet.");
        }

        int expected = 1;

        assertEquals(expected, result);

        this.printStatus(""+expected, ""+result);
    }

    /***
     * Tests the value of the actual and expected variables
     * A2 = verwijzing naar de acceptatie ID in testrapportage
     * SR11 = Systeem requirement
     */
    @Test
    public void A2_SR11_create_actual_values_expected_values() {
        System.out.println("Test: A2_SR11_create_actual_values_expected_values");

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
        dummyObject.setEmp_comment("Wel");
        dummyObject.setMan_comment("Ja");
        dummyObject.setEmp_id(2);

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
        assertEquals("Wel", result.getEmp_comment());
        assertEquals("Ja", result.getMan_comment());
        assertEquals(2, result.getEmp_id());
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
