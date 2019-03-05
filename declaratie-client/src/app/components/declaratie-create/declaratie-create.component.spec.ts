import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaratieCreateComponent } from './declaratie-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DeclaratieCreateComponent', () => {
  let component: DeclaratieCreateComponent;
  let fixture: ComponentFixture<DeclaratieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [ DeclaratieCreateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaratieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
