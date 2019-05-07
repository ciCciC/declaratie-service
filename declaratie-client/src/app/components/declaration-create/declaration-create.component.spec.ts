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

  it('form should be valid', () => {
    component.createForm.get('description').setValue('This is my description');
    component.processDate = new Date();
    component.createForm.get('amount').setValue(10);
    component.createForm.get('empMessage').setValue('I like beer');
    component.createForm.get('files').setValue(1);

    expect(component.createForm.valid).toEqual(true);
    expect(component.createForm.get('description').value).toEqual('This is my description');
  });

  it('form should be invalid', () => {
    component.createForm.get('description').setValue('');
    component.createForm.get('amount').setValue(-10);

    expect(component.createForm.valid).toEqual(false);
    expect(component.createForm.get('description').value).toEqual('');
  });
});
