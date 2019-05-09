import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DeclarationCreateComponent} from './declaration-create.component';
import {DeclarationfileUploadComponent} from '../declarationfile-upload/declarationfile-upload.component';

describe(DeclarationCreateComponent.name, () => {
  let component: DeclarationCreateComponent;
  let fixture: ComponentFixture<DeclarationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ DeclarationCreateComponent, DeclarationfileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('US7_MedewerkerKanEenDeclaratieIndienen', () => {

    it('TG1', () => {
      // Prepare
      component.createForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.createForm.get('amount').setValue(50);
      component.createForm.get('empMessage').setValue('Employee message');
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(true);
    });

    it('TG2', () => {
      // Prepare
      let beschrijving = 'Food';

      for (let i = 0; i < 260; i++) {
        beschrijving += 'z';
      }

      component.createForm.get('description').setValue(beschrijving);
      component.processDate = new Date();
      component.createForm.get('amount').setValue(50);
      component.createForm.get('empMessage').setValue('Employee message');
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(false);
    });

    it('TG4', () => {
      // Prepare
      component.createForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.createForm.get('amount').setValue(-50);
      component.createForm.get('empMessage').setValue('Employee message');
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(false);
    });

    it('TG6', () => {
      // Prepare
      let empMessage = 'empMessage';

      for (let i = 0; i < 260; i++) {
        empMessage += 'z';
      }
      component.createForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.createForm.get('amount').setValue(50);
      component.createForm.get('empMessage').setValue(empMessage);
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(false);
    });

    it('TG9', () => {
      // Prepare
      component.createForm.get('description').setValue('');
      component.processDate = new Date();
      component.createForm.get('amount').setValue(50);
      component.createForm.get('empMessage').setValue('Employee');
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(false);
    });

    it('TG10', () => {
      // Prepare
      component.createForm.get('description').setValue('Food');
      component.processDate = new Date();
      component.createForm.get('amount').setValue(150000);
      component.createForm.get('empMessage').setValue('Employee');
      component.createForm.get('files').setValue(1);

      // Assert
      expect(component.createForm.valid).toEqual(false);
    });
  });
});
