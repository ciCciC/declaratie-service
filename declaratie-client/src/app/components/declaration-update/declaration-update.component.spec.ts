import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DeclarationUpdateComponent } from './declaration-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe(DeclarationUpdateComponent.name, () => {
  let component: DeclarationUpdateComponent;
  let fixture: ComponentFixture<DeclarationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [{provide: MatDialogRef, useValue: {}}, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      declarations: [ DeclarationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('A41_TG1_should_create_' + DeclarationUpdateComponent.name, () => {
    expect(component).toBeTruthy();
  });

  it('A41_TG2_should_not_create_' + DeclarationUpdateComponent.name, () => {
    component = null;
    fixture.detectChanges();
    expect(component).toBeNull();
  });

  describe('De medewerker kan geen verkeerde data opslaan', () => {

    it('US6_A43_TG1_InvoerIsValide', () => {
      // Action
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');

      // Assert
      expect(component.updateForm.valid).toEqual(true);
    });

    it('US6_A43_TG2_InvoerIsNietValide', () => {
      // Prepare
      const maxLimit = 255;

      let description = '';

      for (let i = 0; i <= maxLimit; i++) {
        description += 'z';
      }

      // Action
      component.updateForm.get('description').setValue(description);
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');

      // Assert
      expect(component.updateForm.valid).toBe(false);
    });

    it('US6_A43_TG4_InvoerIsNietValide', () => {
      // Prepare
      const amount = -50;

      // Action
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(amount);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue('Manager message');

      // Assert
      expect(component.updateForm.valid).toBe(false);
    });

    it('US6_A43_TG6_InvoerIsNietValide', () => {
      // Prepare
      const maxLimit = 255;

      let empMessage = '';

      for (let i = 0; i <= maxLimit; i++) {
        empMessage += 'z';
      }

      // Action
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue(empMessage);
      component.updateForm.get('manMessage').setValue('Manager message');

      // Assert
      expect(component.updateForm.valid).toBe(false);
    });

    it('US6_A43_TG8_InvoerIsNietValide', () => {
      // Prepare
      const maxLimit = 255;

      let manMessage = '';

      for (let i = 0; i <= maxLimit; i++) {
        manMessage += 'z';
      }

      // Action
      component.updateForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.updateForm.get('amount').setValue(50);
      component.updateForm.get('empMessage').setValue('Employee message');
      component.updateForm.get('manMessage').setValue(manMessage);

      // Assert
      expect(component.updateForm.valid).toBe(false);
    });

  });
});
