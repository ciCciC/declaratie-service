import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DeclarationUpdateComponent } from './declaration-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule, MatTableModule} from '@angular/material';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DeclarationfileUploadComponent} from '../declarationfile-upload/declarationfile-upload.component';

describe(DeclarationUpdateComponent.name, () => {
  let component: DeclarationUpdateComponent;
  let fixture: ComponentFixture<DeclarationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MatTableModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [{provide: MatDialogRef, useValue: {}}, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      declarations: [ DeclarationUpdateComponent, DeclarationfileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should_create_component' + DeclarationUpdateComponent.name, () => {
    expect(component).toBeTruthy();
  });

  describe('US6_MedewerkerKanEenAfgekeurdeOfIngediendeDeclaratieWijzigen', () => {
    it('TG1', () => {
      // Prepare
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(true);
    });

    it('TG2', () => {
      // Prepare
      let karakters = '';

      for (let i = 0; i < 260; i++) {
        karakters += '' + 1;
      }

      component.updateForm.get('description').setValue(karakters);
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });

    it('TG4', () => {
      // Prepare
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(-50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });

    it('TG6', () => {
      // Prepare
      let karakters = '';

      for (let i = 0; i < 260; i++) {
        karakters += '' + 1;
      }

      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue(karakters);
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });

    it('TG8', () => {
      // Prepare
      let karakters = '';

      for (let i = 0; i < 260; i++) {
        karakters += '' + 1;
      }

      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue(karakters);
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });

    it('TG9', () => {
      // Prepare
      component.updateForm.get('description').setValue('');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });

    it('TG10', () => {
      // Prepare
      component.updateForm.get('description').setValue('');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(150000);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');
      component.updateForm.get('files').setValue(1);

      // Assert
      expect(component.updateForm.valid).toEqual(false);
    });
  });
});
