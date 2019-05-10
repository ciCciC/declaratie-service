import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { DeclarationTableComponent } from './declaration-table.component';
import {
  MatDialog,
  MatDialogModule,
  MatIconModule,
  MatPaginator,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {of} from 'rxjs';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement, NgModule} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DeclarationViewComponent} from '../declaration-view/declaration-view.component';
import {by, element} from 'protractor';

describe(DeclarationTableComponent.name, () => {

  let component, container: DeclarationTableComponent;
  let fixture: ComponentFixture<DeclarationTableComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let collaborator: DeclarationService;
  let errorHandlerService: ErrorHandlerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ DeclarationTableComponent ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationTableComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
    collaborator = new DeclarationService(undefined);
    errorHandlerService = new ErrorHandlerService(undefined);
  });

  it('US10_shouldCreate_' + DeclarationTableComponent.name, () => {
    expect(component).toBeTruthy();
  });

  it('US10_shouldShowListOfDeclarations', () => {
    /**
     * Hier wordt Stubs gebruikt, ook wel Spy genoemd. Enige verschil is Spy kijkt of
     * een functie is aangeroepen en hoe vaak.
     *
     * Sociable unit-test, test unit is afhankelijk van een andere units gedrag.
     * Ze maken gebruik van real instances van hun dependencies.
     */

    // Arrange : undefined is dummy

    const matDialog = new MatDialog(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    container = new DeclarationTableComponent(collaborator as unknown as DeclarationService,
      errorHandlerService as unknown as ErrorHandlerService,
      matDialog as unknown as MatDialog, undefined, undefined);

    collaborator.getDeclarations = () => of(DECLARATIONS);

    // Act
    container.ngOnInit();

    // Assert
    expect(container.dataSource.data.length).toEqual(DECLARATIONS.length);

  });

  it('US10_shouldGetListOfDeclarations', () => {
    /**
     * Hier wordt Spy gebruikt om te testen of de methode wordt aangeroepen
     * van DeclarationTableComponent.
     *
     * Solitary unit-test, gebruikt geen real instances van dependencies
     */

    // Arrange : undefined is dummy

    const matDialog = new MatDialog(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    container = new DeclarationTableComponent(collaborator as unknown as DeclarationService,
      errorHandlerService as unknown as ErrorHandlerService,
      matDialog as unknown as MatDialog, undefined, undefined);

    const spy = spyOn(container, 'getDeclarationsList');

    // Act
    container.ngOnInit();

    // Assert
    expect(spy).toHaveBeenCalled();

  });

  it('US8_clickOnDelete ' + DeclarationTableComponent.name, () => {
    const spy_create = spyOn(component, 'toDelete');
    component.toDelete();

    expect(spy_create).toHaveBeenCalled();
  });

  describe('testingDialogs', () => {

    it('should open openDialog view', fakeAsync(() => {

      spyOn(component, 'openDialog');
      let openView = fixture.debugElement.nativeElement.querySelector('#openView');
      openView.click();

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.openDialog).toHaveBeenCalled();
      });

      }
    ));
  });
});
