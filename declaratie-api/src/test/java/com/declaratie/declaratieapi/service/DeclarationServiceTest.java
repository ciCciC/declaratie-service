package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;

import org.junit.Test;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Date;
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

    @Test
    public void create() {
        System.out.println("Test: create");

        /***
         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
         */

        Date date = new Date();
        Declaration dummyObject = spy(Declaration.class);
        dummyObject.setDescription("Dit is mijn description");
        dummyObject.setAmount(120);
        dummyObject.setDate(date);
        dummyObject.setStatusEnum(StatusEnum.SUBMITTED);
        dummyObject.setEmp_comment("Employee");
        dummyObject.setMan_comment("Manager");
        dummyObject.setEmp_id(12);

        when(declarationRepository.save(dummyObject)).thenReturn(dummyObject);

        Declaration result = declarationService.create(dummyObject);

        assertEquals("Dit is mijn description", result.getDescription());
        assertEquals(120.0, result.getAmount(), 0);
        assertEquals(date, result.getDate());
        assertEquals(StatusEnum.SUBMITTED, result.getStatusEnum());
        assertEquals("Employee", result.getEmp_comment());
        assertEquals("Manager", result.getMan_comment());
        assertEquals(12, result.getEmp_id());
    }

    @Test
    public void testCreate_returnsNewDeclaration(){
        System.out.println("Test: testCreate_returnsNewDeclaration");
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(new Declaration());

        Declaration declaration = new Declaration();

        assertThat(this.declarationService.create(declaration), is(notNullValue()));
    }

    @Test
    public void create_checkListSize(){
        System.out.println("Test: create_checkListSize");

        List<Declaration> declarationList = new ArrayList<>();
        declarationList.add(new Declaration("Dit is mijn description", new Date(), 120,
                "Employee", "Manager", StatusEnum.SUBMITTED, 12));

        when(declarationRepository.findAll()).thenReturn(declarationList);

        int result = declarationService.getAll().size();
        int expected = 1;

        assertEquals(expected, result);

        this.printStatus(""+expected, ""+result);
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
