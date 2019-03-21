import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationStepperComponent } from './declaration-stepper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatStepperModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MaterialModule} from '../../material/material.module';
import {DeclarationCreateComponent} from '../declaration-create/declaration-create.component';
import {DeclarationPhotoUploadComponent} from '../declaration-photo-upload/declaration-photo-upload.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DeclarationService} from '../../services/declaration/declaration.service';

describe('DeclarationStepperComponent', () => {
  let component: DeclarationStepperComponent;
  let fixture: ComponentFixture<DeclarationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatStepperModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule
      ],
      declarations: [ DeclarationStepperComponent, DeclarationCreateComponent, DeclarationPhotoUploadComponent ],
      providers: [DeclarationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
