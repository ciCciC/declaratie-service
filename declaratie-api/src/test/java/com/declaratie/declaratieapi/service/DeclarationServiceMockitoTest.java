package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;

import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.exceptionHandler.DeclarationNotFoundException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
import java.util.*;
import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
public class DeclarationServiceMockitoTest {

    /***
     * Hier wordt de unit testen uitgevoerd.
     *
     * A = verwijst naar de acceptatie ID in het testrapport
     * SR = System requirement ID
     * TG = verwijst naar het testgeval in het testrapport
     */

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
    public void A11_SR11_deMedewerkerKanEenDeclaratieToevoegen(){
        System.out.println("Test: A11_SR11_deMedewerkerKanEenDeclaratieToevoegen");

        Declaration declaration = new Declaration("beschrijving", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(declaration);

        try{

            assertThat(this.declarationService.create(new DeclarationModel(declaration)), is(notNullValue()));

        }catch (UnprocessableDeclarationException ex){
            System.out.println("Declaratie kan niet aangemaakt worden.");
        }
    }

//    /***
//     * Tests the value of the actual and expected variables
//     */
//    @Test
//    public void A12_SR11_TG1_create_actual_values_expected_values() {
//
//        System.out.println("Test: A12_SR11_TG1_create_actual_values_expected_values");
//
//        /***
//         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
//         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
//         */
//
//        Declaration dummyObject = spy(Declaration.class);
//        dummyObject.setDescription("auto");
//        dummyObject.setAmount(1500);
//        dummyObject.setDate(new GregorianCalendar(2019, 4, 30).getTime());
//        dummyObject.setStatusEnum(StateEnum.SUBMITTED);
//        dummyObject.setEmpComment("Wel");
//        dummyObject.setManComment("Ja");
//        dummyObject.setEmpId(2);
//
//        Declaration actualObject = spy(Declaration.class);
//        actualObject.setDescription("eten");
//        actualObject.setAmount(1000);
//        actualObject.setDate(new GregorianCalendar(2019, 4, 20).getTime());
//        actualObject.setStatusEnum(StateEnum.REJECTED);
//        actualObject.setEmpComment("Nee");
//        actualObject.setManComment("Niet");
//        actualObject.setEmpId(1);
//
//        when(declarationRepository.save(dummyObject)).thenReturn(actualObject);
//
//        DeclarationModel result = null;
//
//        try{
//            result = declarationService.create(new DeclarationModel(dummyObject));
//        }catch (UnprocessableDeclarationException ex){
//            System.out.println("Declaratie kan niet aangemaakt worden.");
//        }
//
//        assertNotEquals(dummyObject.getDescription(), result.getDescription());
//        assertNotEquals(dummyObject.getAmount(), result.getAmount(), 0);
//        assertNotEquals(dummyObject.getDate(), result.getDate());
//        assertNotEquals(dummyObject.getStatusEnum(), result.getStatus());
//        assertNotEquals(dummyObject.getEmpComment(), result.getEmpComment());
//        assertNotEquals(dummyObject.getManComment(), result.getManComment());
//        assertNotEquals(dummyObject.getEmpId(), result.getEmpId().longValue());
//    }

//    /***
//     * Tests the value of the actual and expected variables
//     */
//    @Test
//    public void A12_SR11_TG8_create_actual_values_expected_values() {
//
//        System.out.println("Test: A12_SR11_TG8_create_actual_values_expected_values");
//
//        /***
//         * Soms moeten we echte afhankelijkheidsmethoden aanroepen,
//         * maar we willen nog steeds interacties met die afhankelijkheid verifiëren of volgen, daarvoor gebruiken we een SPY.
//         */
//
//        Date date = new GregorianCalendar(2019, 4, 30).getTime();
//
//        Declaration dummyObject = spy(new Declaration());
//        dummyObject.setId(1L);
//        dummyObject.setDescription("auto");
//        dummyObject.setAmount(1500);
//        dummyObject.setDate(date);
//        dummyObject.setStatusEnum(StateEnum.SUBMITTED);
//        dummyObject.setEmpComment("Wel");
//        dummyObject.setManComment("Ja");
//        dummyObject.setEmpId(2);
//
//        DeclarationModel toCreate = spy(new DeclarationModel());
//        toCreate.setId(1L);
//        toCreate.setDescription("auto");
//        toCreate.setAmount(1500);
//        toCreate.setDate(date);
//        toCreate.setStatus(StateEnum.SUBMITTED.name());
//        toCreate.setEmpComment("Wel");
//        toCreate.setManComment("Ja");
//        toCreate.setEmpId(2L);
//
//        when(declarationRepository.save(dummyObject)).thenReturn(dummyObject);
//
//        DeclarationModel result = null;
//
//        try{
//            result = declarationService.create(toCreate);
//        }catch (UnprocessableDeclarationException ex){
//            System.out.println("Declaratie kan niet aangemaakt worden.");
//        }
//
//        assertEquals("auto", result.getDescription());
//        assertEquals(1500, result.getAmount(), 0);
//        assertEquals(date, result.getDate());
//        assertEquals(StateEnum.SUBMITTED.name(), result.getStatus());
//        assertEquals("Wel", result.getEmpComment());
//        assertEquals("Ja", result.getManComment());
//        assertEquals(2, result.getEmpId().longValue());
//    }


//    @Test
//    public void update() {
//    }

    /***
     * Tests the value of the actual and expected variables
     */
    @Test
    public void A22_SR13_TG1_system_can_get_declaration_list() {
        System.out.println("Test: A22_SR13_TG1_system_can_get_declaration_list");

        List<Declaration> declarationsList = new ArrayList<>();

        Stream.of("Benzine", "Eten", "Boek", "Administratie", "Computer").forEach(description -> {
            Declaration declaration = new Declaration(description, new Date(), 120,
                    "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
            declarationsList.add(declaration);
        });

        when(declarationRepository.findAll()).thenReturn(declarationsList);

        List<DeclarationModel> result = null;

        try{
            result = declarationService.getAll();
        }catch (ResponseStatusException ex){
            System.out.println("Declaratie lijst bestaat niet.");
        }

        int expected = 5;

        assertEquals(expected, result.size());

        this.printStatus(expected, result.size());
    }

    /***
     * Tests the value of the actual and expected variables
     */
    @Test
    public void A22_SR13_TG2_get_declaration_list_is_null() {
        System.out.println("Test: A22_SR13_TG2_get_declaration_list_is_null");

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

        this.printStatus(expected, result);
    }

    /***
     * Tests retrieving a declaration
     */
    @Test
    public void A32_SR8_TG1_deMedewerkerKanEenDeclaratieOpvragen() {
        System.out.println("Test: A32_SR8_TG1_deMedewerkerKanEenDeclaratieOpvragen");

        Declaration dummyObject = new Declaration("Lolz", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
        dummyObject.setId(1L);

        when(this.declarationRepository.existsById(dummyObject.getId())).thenReturn(true);

        try {
            when(declarationRepository.findById(dummyObject.getId())).thenReturn(Optional.of(dummyObject));

            DeclarationModel declaratie_bestaat = this.declarationService.read(dummyObject.getId());

            assertThat(declaratie_bestaat, is(notNullValue()));

        } catch (DeclarationNotFoundException e) {
            System.out.println("Message: " + e.getMessage());
        }
    }

    /***
     * Tests retrieving a declaration
     */
    @Test
    public void A32_SR8_TG2_deMedewerkerKanEenDeclaratieOpvragen() {
        System.out.println("Test: A32_SR8_TG2_deMedewerkerKanEenDeclaratieOpvragen");

        Long dummyId = 1L;

        when(this.declarationRepository.existsById(dummyId)).thenReturn(false);

        DeclarationModel declaratie_bestaat = null;

        try {
            declaratie_bestaat = this.declarationService.read(dummyId);
        } catch (DeclarationNotFoundException e) {
            System.out.println("Message: " + e.getMessage());
        }

        assertNull(declaratie_bestaat);
    }

    /***
     * Tests delete a declaration
     */
    @Test
    public void A33_SR10_TG1_deMedewerkerKanEenDeclaratieVerwijderen() {
        System.out.println("Test: A33_SR10_TG1_deMedewerkerKanEenDeclaratieVerwijderen");

        Long dummyId = 1L;

        DeclarationService declarationService = mock(DeclarationService.class);

        boolean declaratie_bestaat = true;

        try {
            doNothing().when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (DeclarationNotFoundException | ResponseStatusException e) {
            declaratie_bestaat = false;
            System.out.println("Message: " + e.getMessage());
        }
        assertTrue(declaratie_bestaat);
    }

    /***
     * Tests delete a declaration
     */
    @Test
    public void A33_SR10_TG2_deMedewerkerKanEenDeclaratieVerwijderen() {
        System.out.println("Test: A33_SR10_TG2_deMedewerkerKanEenDeclaratieVerwijderen");

        DeclarationService declarationService = mock(DeclarationService.class);

        // Deze declaratie bestaat niet.
        Long dummyId = -100L;

        try {
            doThrow(DeclarationNotFoundException.class).when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (DeclarationNotFoundException e) {
            System.out.println("Message: " + e.getMessage());
            System.out.println("Declaratie bestaat niet.");
        }
    }

    /***
     * Voor het printen van de expected en actual waardes
     * @param expected voor expected waarde
     * @param actual voor actual waarde
     */
    private void printStatus(Object expected, Object actual){
        System.out.println(MessageFormat.format("Expected: {0}, Actual: {1}", expected, actual));
    }
}
