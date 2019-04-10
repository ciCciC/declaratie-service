import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationfileUploadComponent } from './declarationfile-upload.component';
import {MatDialogModule} from '@angular/material';

describe('DeclarationfileUploadComponent', () => {
  let component: DeclarationfileUploadComponent;
  let fixture: ComponentFixture<DeclarationfileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ DeclarationfileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationfileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
