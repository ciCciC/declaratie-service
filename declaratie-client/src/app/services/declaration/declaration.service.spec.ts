import {async, TestBed} from '@angular/core/testing';

import { DeclarationService } from './declaration.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {of} from 'rxjs';

describe(DeclarationService.name, () => {

  let declarationService: DeclarationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create ' + DeclarationService.name, () => {
    const service: DeclarationService = TestBed.get(DeclarationService);
    expect(service).toBeTruthy();
  });

  describe('Create call', () => {

    it('US7_shouldAddDeclaration', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'addDeclaration').and.returnValues(of(DECLARATIONS[0]));

      declarationService.addDeclaration(DECLARATIONS[0], DECLARATIONS[0].files).subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('US7_shouldCallAddDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'addDeclaration');

      // Act
      declarationService.addDeclaration(DECLARATIONS[0], DECLARATIONS[0].files);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

  describe('GetAll call', () => {

    it('US10_shouldReturnListOfDeclarations', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'getDeclarations').and.returnValues(of(DECLARATIONS));

      declarationService.getDeclarations().subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS);
      expect(response.length).toBe(DECLARATIONS.length);
    });

    it('US10_shouldCallGetDeclarations', () => {
      declarationService = new DeclarationService(undefined);
      const spy_getAll = spyOn(declarationService, 'getDeclarations').and.returnValues(of(DECLARATIONS));

      declarationService.getDeclarations();

      expect(spy_getAll).toHaveBeenCalled();
    });

  });

  describe('Read call', () => {

    it('US9_shouldGetDeclaration', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'getDeclaration').and.returnValues(of(DECLARATIONS[0]));

      declarationService.getDeclaration(1).subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('US9_shouldCallGetDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'getDeclaration');

      // Act
      declarationService.getDeclaration(1);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

  describe('Delete call', () => {

    it('US8_shouldDeleteDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'deleteDeclaration').and.returnValues(of(DECLARATIONS[0]));

      // Act
      declarationService.deleteDeclaration(1).subscribe( data => {
        response = data;
      });

      // Assert
      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('US8_shouldCallDeleteDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'deleteDeclaration');

      // Act
      declarationService.deleteDeclaration(1);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

  describe('Update call', () => {

    it('US6_shouldUpdateDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'updateDeclaration').and.returnValues(of(DECLARATIONS[0]));

      // Act
      declarationService.updateDeclaration(DECLARATIONS[0], DECLARATIONS[0].files).subscribe( data => {
        response = data;
      });

      // Assert
      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('US6_shouldCallUpdateDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'updateDeclaration');

      // Act
      declarationService.updateDeclaration(DECLARATIONS[0], DECLARATIONS[0].files);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

});
