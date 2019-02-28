package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.CopyManager.CopyDeclaration;
import com.declaratie.declaratieapi.controller.DeclarationController;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

@RunWith(SpringJUnit4ClassRunner.class)
public class DeclarationRepositoryTest {

    @Mock
    private DeclarationRepository declarationRepository;

    @InjectMocks
    private DeclarationService declarationService;

    @Before
    public void setUp() throws Exception {
        System.out.println("Before");
        MockitoAnnotations.initMocks(this);

    }

    @Test
    public void create() {
        System.out.println("Create method test");

        Date date = new Date();

        Declaration dummyObject = mock(Declaration.class);
//        dummyObject.setId(1L);
        dummyObject.setDescription("Dit is mijn description");
        dummyObject.setAmount(120);
        dummyObject.setDate(date);
        dummyObject.setStatusEnum(StatusEnum.SUBMITTED);
        dummyObject.setEmp_comment("Employee");
        dummyObject.setMan_comment("Manager");
        dummyObject.setEmp_id(12);

//        DeclarationModel dummyObject = mock(DeclarationModel.class);
//        dummyObject.setId(1L);
//        dummyObject.setDescription("Dit is mijn description");
//        dummyObject.setAmount(120);
//        dummyObject.setDate(new Date());
//        dummyObject.setStatus("SUBMITTED");
//        dummyObject.setEmp_comment("Employee");
//        dummyObject.setMan_comment("Manager");
//        dummyObject.setEmp_id(12);

        when(declarationRepository.save(dummyObject)).thenReturn(dummyObject);

        Declaration result = declarationService.create(dummyObject);

//        assertEquals(1L, result.getId().longValue(), 0);
        assertEquals("Dit is mijn description", result.getDescription());
        assertEquals(120.0, result.getAmount(), 0);
        assertEquals(date, result.getDate());
        assertEquals(StatusEnum.SUBMITTED, result.getStatusEnum());
        assertEquals("Employee", result.getEmp_comment());
        assertEquals("Manager", result.getMan_comment());
        assertEquals(12, result.getEmp_id());

    }

    private void printStatus(String expected, String actual){
        System.out.println("Expected: " + expected + ",\t" + "Actual: " + actual);
    }

}
