import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationExpansionListComponent } from './declaration-expansion-list.component';
import {MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DeclarationExpansionListComponent', () => {
  let component: DeclarationExpansionListComponent;
  let fixture: ComponentFixture<DeclarationExpansionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ DeclarationExpansionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationExpansionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
