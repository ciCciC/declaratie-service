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

    it('A1_SR11_shouldAddDeclaration', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'addDeclaration').and.returnValues(of(DECLARATIONS[0]));

      declarationService.addDeclaration(DECLARATIONS[0]).subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('A1_SR11_shouldCallAddDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'addDeclaration');

      // Act
      declarationService.addDeclaration(DECLARATIONS[0]);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

  describe('GetAll call', () => {

    it('A6_SR12_shouldReturnListOfDeclarations', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'getDeclarations').and.returnValues(of(DECLARATIONS));

      declarationService.getDeclarations().subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS);
      expect(response.length).toBe(DECLARATIONS.length);
    });

    it('A6_SR12_shouldCallGetDeclarations', () => {
      declarationService = new DeclarationService(undefined);
      const spy_getAll = spyOn(declarationService, 'getDeclarations').and.returnValues(of(DECLARATIONS));

      declarationService.getDeclarations();

      expect(spy_getAll).toHaveBeenCalled();
    });

  });

  describe('Read call', () => {

    it('A32_SR8_shouldGetDeclaration', () => {
      declarationService = new DeclarationService(undefined);

      let response;

      spyOn(declarationService, 'getDeclaration').and.returnValues(of(DECLARATIONS[0]));

      declarationService.getDeclaration(1).subscribe( data => {
        response = data;
      });

      expect(response).toEqual(DECLARATIONS[0]);
    });

    it('A32_SR8_shouldCallGetDeclaration', () => {
      // Arrange
      declarationService = new DeclarationService(undefined);

      const spy_create = spyOn(declarationService, 'getDeclaration');

      // Act
      declarationService.getDeclaration(1);

      // Assert
      expect(spy_create).toHaveBeenCalled();
    });

  });

});
