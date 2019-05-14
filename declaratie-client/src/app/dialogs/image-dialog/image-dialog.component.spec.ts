import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDialogComponent } from './image-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PlatformModule} from '@angular/cdk/platform';
import {DeclarationFile} from '../../models/DeclarationFile';

describe(ImageDialogComponent.name, () => {
  let component: ImageDialogComponent;
  let fixture: ComponentFixture<ImageDialogComponent>;

  const fakeFile: File = new File([window.atob('fakeblob')], 'foto.jpg', { type: 'image/jpeg' });

  const declarationFile: DeclarationFile = {
    id: 123,
    filename: 'foto.jpg',
    file: fakeFile,
    fileUrl: ''
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        PlatformModule
      ],
      providers: [{provide: MatDialogRef, useValue: {}}, {
        provide: MAT_DIALOG_DATA,
        useValue: declarationFile
      }],
      declarations: [ ImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('US29_should create_' + ImageDialogComponent.name, () => {
    expect(component).toBeTruthy();
  });
});
