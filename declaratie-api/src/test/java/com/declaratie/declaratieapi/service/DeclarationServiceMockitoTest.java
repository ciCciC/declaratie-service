package com.declaratie.declaratieapi.service;

import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;

import com.declaratie.declaratieapi.model.DeclarationModel;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
import java.util.*;
import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;

import static org.hamcrest.CoreMatchers.is;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
public class DeclarationServiceMockitoTest {

    /***
     * Hier wordt de unit testen uitgevoerd.
     *
     * US = User story als testbasis
     * TG = verwijst naar het testgeval van de testbasis in het testrapport
     */

    @Mock
    private DeclarationRepository declarationRepository;

    @InjectMocks
    private DeclarationService declarationService;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /***
     * Test de functionaliteit declaratie indienen
     * US7 = verwijzing naar user story, de testbasis
     * TG1 = verwijzing naar het testgeval in het testrapport
     * Semantisch = soort testtechniek
     */
    @Test
    public void US7_TG1_DeMedewerkerKanEenDeclaratieIndienen_Semantisch(){
        Declaration declaration = new Declaration("beschrijving", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(declaration);

        try{
            assertThat(this.declarationService.create(new DeclarationModel(declaration)), is(notNullValue()));
        }catch (ResponseStatusException ex){
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG2_DeMedewerkerKanEenDeclaratieIndienen_Semantisch(){
        Declaration declaration = new Declaration("beschrijving", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        try{
            assertThat(this.declarationService.create(null), isNull());
        }catch (ResponseStatusException ex){
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG1_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        Declaration declaration = new Declaration(beschrijving, new Date(), bedrag,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(declaration);

        try {
            // Call
            // Assert
            assertThat(this.declarationService.create(new DeclarationModel(declaration)), is(notNullValue()));
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.FORBIDDEN);
        }
    }

    @Test
    public void US7_TG2_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = -10;
        Declaration declaration = new Declaration(beschrijving, new Date(), bedrag,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class)))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bedrag must be between 0,01 and 100000."));
        try {
            // Call
            this.declarationService.create(new DeclarationModel(declaration));
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG4_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 110000;
        Declaration declaration = new Declaration(beschrijving, new Date(), bedrag,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class)))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bedrag must be between 0,01 and 100000."));
        try {
            // Call
            this.declarationService.create(new DeclarationModel(declaration));
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG7_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";

        for (int i = 0; i < 270; i++) {
            beschrijving += ""+1;
        }

        double bedrag = 10;
        Declaration declaration = new Declaration(beschrijving, new Date(), bedrag,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class)))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Beschrijving should be between 1 and 255 characters."));
        try {
            // Call
            this.declarationService.create(new DeclarationModel(declaration));
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US7_TG9_DeMedewerkerKanEenDeclaratieIndienen_Syntactisch() {
        // Prepare
        String beschrijving = "";

        double bedrag = 10;
        Declaration declaration = new Declaration(beschrijving, new Date(), bedrag,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

        when(this.declarationRepository.save(any(Declaration.class)))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Beschrijving should be between 1 and 255 characters."));
        try {
            // Call
            this.declarationService.create(new DeclarationModel(declaration));
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US6_TG1_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        StateEnum currentState = StateEnum.REJECTED;
        Declaration declaratieDb = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(toSave);

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);

            // Assert
            Assertions.assertThat(declarationModel).isEqualTo(afterUpdate);
            System.out.println("Declaratie is gewijzigd");

        } catch (ResponseStatusException e) {
            System.out.println(e.getReason());
        }
    }

    @Test
    public void US6_TG2_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        DeclarationModel declarationModel = null;

        // Call
        // Assert
        try {
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        }catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.NOT_FOUND);
        }
    }

    @Test
    public void US6_TG4_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.empty());

        // Call
        // Assert
        try {
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        }catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.NOT_FOUND);
        }
    }

    @Test
    public void US6_TG6_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(toSave);

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);

            // Assert
            Assertions.assertThat(declarationModel).isEqualTo(afterUpdate);
            System.out.println("Declaratie is gewijzigd");

        } catch (ResponseStatusException e) {
            System.out.println(e.getReason());
        }
    }

    @Test
    public void US6_TG7_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        StateEnum currentState = StateEnum.INPROGRESS;
        Declaration declaratieDb = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(toSave);

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
            // Assert
            Assertions.assertThat(declarationModel).isEqualTo(afterUpdate);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.FORBIDDEN);
        }
    }

    @Test
    public void US6_TG8_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Semantisch() {
        // Prepare
        StateEnum currentState = StateEnum.APPROVED;
        Declaration declaratieDb = new Declaration("Food", new Date(), 50,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(toSave);

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
            // Assert
            Assertions.assertThat(declarationModel).isEqualTo(afterUpdate);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.FORBIDDEN);
        }
    }

    @Test
    public void US6_TG1_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(any(Declaration.class))).thenReturn(toSave);

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
            // Assert
            Assertions.assertThat(declarationModel).isEqualTo(afterUpdate);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.FORBIDDEN);
        }
    }

    @Test
    public void US6_TG2_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);
        declarationModel.setAmount(-10L);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(toSave))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bedrag must be greater than or equal to 0,01."));

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US6_TG4_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 110000;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);
        declarationModel.setAmount(-10L);

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(toSave))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bedrag must be smaller than or equal to 100000."));

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US6_TG7_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);

        for (int i = 0; i < 270; i++) {
            declarationModel.setDescription(declarationModel.getDescription()+""+1);
        }

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(toSave))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Beschrijving should be between 1 and 255 characters."));

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US6_TG9_MedewerkerKanEenAfgekeurdeOfIngediendeDecaratieWijzigen_Syntactisch() {
        // Prepare
        String beschrijving = "Food";
        double bedrag = 10;
        StateEnum currentState = StateEnum.SUBMITTED;
        Declaration declaratieDb = new Declaration(beschrijving, new Date(), bedrag,
                "Employee message", "Manager message", currentState, 1);
        declaratieDb.setId(1L);

        DeclarationModel declarationModel = new DeclarationModel(declaratieDb);
        declarationModel.setDescription("");

        Declaration toSave = declarationModel.toDeclaration();
        toSave.setId(declaratieDb.getId());

        when(this.declarationRepository.findById(1L)).thenReturn(Optional.of(declaratieDb));
        when(this.declarationRepository.save(toSave))
                .thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Beschrijving should be between 1 and 255 characters."));

        try {
            // Call
            DeclarationModel afterUpdate = this.declarationService.update(1L, declarationModel);
        } catch (ResponseStatusException ex) {
            System.out.println(ex.getReason());
            // Assert
            assertThat(ex.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST);
        }
    }

    @Test
    public void US10_DeclaratiesLijstOphalen() {
        // Prepare
        List<Declaration> declarationsList = new ArrayList<>();
        Stream.of("Benzine", "Eten", "Boek", "Administratie", "Computer").forEach(description -> {
            Declaration declaration = new Declaration(description, new Date(), 120,
                    "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
            declarationsList.add(declaration);
        });

        int expected = 5;

        when(declarationRepository.findAll(Sort.by("id").descending())).thenReturn(declarationsList);

        // Action
        List<DeclarationModel> result = result = declarationService.getAll();

        // Assert
        assertEquals(expected, result.size());
    }

    @Test
    public void US9_TG1_deMedewerkerKanEenDeclaratieOpvragen_Semantisch() {
        // Prepare
        Long declaratieId = 10L;
        Declaration dummyObject = new Declaration("Lolz", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
        dummyObject.setId(declaratieId);

        when(this.declarationRepository.existsById(dummyObject.getId())).thenReturn(true);
        when(declarationRepository.findById(dummyObject.getId())).thenReturn(Optional.of(dummyObject));

        try {
            // Action
            DeclarationModel declaratie_bestaat = this.declarationService.read(dummyObject.getId());

            // Assert
            assertThat(declaratie_bestaat, is(notNullValue()));
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
        }
    }

    @Test
    public void US9_TG2_deMedewerkerKanEenDeclaratieOpvragen_Semantisch() {
        // Prepare
        Long declaratieId = -10L;
        Declaration dummyObject = new Declaration("Lolz", new Date(), 120,
                "Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);
        dummyObject.setId(declaratieId);

        when(this.declarationRepository.existsById(dummyObject.getId())).thenReturn(false);

        try {
            // Action
            DeclarationModel declaratie_bestaat = this.declarationService.read(dummyObject.getId());
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
            // Assert
            assertThat(e.getStatus()).isEqualTo(HttpStatus.NOT_FOUND);
        }
    }

    @Test
    public void US8_TG1_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        Long dummyId = 10L;

        DeclarationService declarationService = mock(DeclarationService.class);

        boolean declaratie_bestaat = true;

        try {
            doNothing().when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            declaratie_bestaat = false;
            System.out.println("Message: " + e.getReason());
        }
        assertTrue(declaratie_bestaat);
    }

    @Test
    public void US8_TG2_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        DeclarationService declarationService = mock(DeclarationService.class);

        Long dummyId = -10L;

        try {
            doThrow(ResponseStatusException.class).when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
            System.out.println("Declaratie bestaat niet.");
        }
    }

    @Test
    public void US8_TG5_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        Long dummyId = 10L;

        DeclarationService declarationService = mock(DeclarationService.class);

        boolean declaratie_bestaat = true;

        try {
            doNothing().when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            declaratie_bestaat = false;
            System.out.println("Message: " + e.getReason());
        }
        assertTrue(declaratie_bestaat);
    }

    @Test
    public void US8_TG6_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        DeclarationService declarationService = mock(DeclarationService.class);

        Long dummyId = -10L;

        try {
            doThrow(ResponseStatusException.class).when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
            System.out.println("Declaratie bestaat niet.");
        }
    }

    @Test
    public void US8_TG7_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        DeclarationService declarationService = mock(DeclarationService.class);

        Long dummyId = 10L;

        try {
            doThrow(ResponseStatusException.class).when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
            System.out.println("Declaratie kan niet verwijderd worden.");
        }
    }

    @Test
    public void US8_TG8_deMedewerkerKanEenDeclaratieVerwijderen_Semantisch() {
        DeclarationService declarationService = mock(DeclarationService.class);

        Long dummyId = 10L;

        try {
            doThrow(ResponseStatusException.class).when(declarationService).delete(dummyId);
            declarationService.delete(dummyId);
        } catch (ResponseStatusException e) {
            System.out.println("Message: " + e.getReason());
            System.out.println("Declaratie kan niet verwijderd worden.");
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
