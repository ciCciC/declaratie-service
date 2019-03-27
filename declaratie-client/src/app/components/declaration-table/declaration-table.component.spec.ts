import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe(DeclarationTableComponent.name, () => {

  let component, container: DeclarationTableComponent;
  let fixture: ComponentFixture<DeclarationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule
      ],
      declarations: [ DeclarationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('A4_SR12_shouldCreate' + DeclarationTableComponent.name, () => {
    expect(component).toBeTruthy();
  });

  it('A6_SR12_shouldShowListOfDeclarations', () => {
    /**
     * Hier wordt Stubs gebruikt, ook wel Spy genoemd. Enige verschil is Spy kijkt of
     * een functie is aangeroepen en hoe vaak.
     *
     * Sociable unit-test, test unit is afhankelijk van een andere units gedrag.
     * Ze maken gebruik van real instances van hun dependencies.
     */

    // Arrange : undefined is dummy
    let collaborator: DeclarationService;
    collaborator = new DeclarationService(undefined);
    const matDialog = new MatDialog(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    container = new DeclarationTableComponent(collaborator as unknown as DeclarationService, matDialog as unknown as MatDialog);
    collaborator.getDeclarations = () => of(DECLARATIONS);

    // Act
    container.ngOnInit();

    // Assert
    expect(container.dataSource.data.length).toEqual(DECLARATIONS.length);

  });

  it('A6_SR12_shouldGetListOfDeclarations', () => {
    /**
     * Hier wordt Spy gebruikt om te testen of de methode wordt aangeroepen
     * van DeclarationTableComponent.
     *
     * Solitary unit-test, gebruikt geen real instances van dependencies
     */

    // Arrange : undefined is dummy
    let collaborator: DeclarationService;
    collaborator = new DeclarationService(undefined);
    const aa = new MatDialog(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    container = new DeclarationTableComponent(collaborator as unknown as DeclarationService, aa as unknown as MatDialog);

    const spy = spyOn(container, 'getDeclarationsList');

    // Act
    container.ngOnInit();

    // Assert
    expect(spy).toHaveBeenCalled();

  });

});
