package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;

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
     */
    @Test
    public void create_returnsNewDeclaration(){
        System.out.println("Test: create_returnsNewDeclaration");
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(new Declaration());

        Declaration declaration = new Declaration();

        assertThat(this.declarationService.create(declaration), is(notNullValue()));
    }

    /***
     * Tests if the new declaration has been added
     */
    @Test
    public void A1_create_checkListSize(){
        System.out.println("Test: A1_create_checkListSize");

        List<Declaration> declarationList = new ArrayList<>();
        declarationList.add(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StatusEnum.SUBMITTED, 12));

        when(declarationRepository.findAll()).thenReturn(declarationList);

        int result = declarationService.getAll().size();
        int expected = 1;

        assertEquals(expected, result);

        this.printStatus(""+expected, ""+result);
    }

    /***
     * Tests the value of the actual and expected variables
     */
    @Test
    public void A2_create() {
        System.out.println("Test: A2_create");

        /***
         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
         */

        Date date = new GregorianCalendar(2019, 4, 30).getTime();

        Declaration dummyObject = spy(Declaration.class);
        dummyObject.setDescription("auto");
        dummyObject.setAmount(1500);
        dummyObject.setDate(date);
        dummyObject.setStatusEnum(StatusEnum.SUBMITTED);
        dummyObject.setEmp_comment("Wel");
        dummyObject.setMan_comment("Ja");
        dummyObject.setEmp_id(2);

        when(declarationRepository.save(dummyObject)).thenReturn(dummyObject);

        Declaration result = declarationService.create(dummyObject);

        assertEquals("auto", result.getDescription());
        assertEquals(1500, result.getAmount(), 0);
        assertEquals(date, result.getDate());
        assertEquals(StatusEnum.SUBMITTED, result.getStatusEnum());
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
//
//    @Test
//    public void delete1() {
//    }
//
//    @Test
//    public void getAll() {
//    }

    private void printStatus(String expected, String actual){
        System.out.println("Expected: " + expected + ",\t" + "Actual: " + actual);
    }
}
