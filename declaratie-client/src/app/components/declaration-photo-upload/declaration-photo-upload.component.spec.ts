import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationPhotoUploadComponent } from './declaration-photo-upload.component';

describe('DeclarationPhotoUploadComponent', () => {
  let component: DeclarationPhotoUploadComponent;
  let fixture: ComponentFixture<DeclarationPhotoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationPhotoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
