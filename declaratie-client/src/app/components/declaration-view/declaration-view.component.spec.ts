import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationViewComponent } from './declaration-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatIconModule} from '@angular/material';

describe('DeclarationViewComponent', () => {
  let component: DeclarationViewComponent;
  let fixture: ComponentFixture<DeclarationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MatIconModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [ DeclarationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
