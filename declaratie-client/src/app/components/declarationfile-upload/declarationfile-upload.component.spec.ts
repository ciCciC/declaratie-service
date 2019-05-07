import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationfileUploadComponent } from './declarationfile-upload.component';
import {MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';
import {EventListener} from '@angular/core/src/debug/debug_node';

describe(DeclarationfileUploadComponent.name, () => {
  let component: DeclarationfileUploadComponent;
  let fixture: ComponentFixture<DeclarationfileUploadComponent>;
  const acceptTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatIconModule,
        MatTableModule
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

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('US1_CallUploadButton', () => {
    const spy_create = spyOn(component, 'openFileBrowser');
    component.openFileBrowser(undefined);

    expect(spy_create).toHaveBeenCalled();
  });

  it('US3_CallDeleteButton', () => {
    const spy_create = spyOn(component, 'toDelete');
    component.toDelete(undefined);

    expect(spy_create).toHaveBeenCalled();
  });

  it('US1_CallOnFileSelectMethod', () => {
    const spy_create = spyOn(component, 'onFileSelect');
    component.onFileSelect(undefined);

    expect(spy_create).toHaveBeenCalled();
  });

  describe('US1_MedewerkerKanEenFotoOfPdfBestandUploaden', () => {

    it('TG1', () => {
      const fakeFiles: File[] = [new File([window.atob('fakeblob')], 'foto.jpg', { type: 'image/jpeg' })];
      component.procesSelectedFiles(fakeFiles);
      expect(component.declarationFiles.data.length).toBe(1);
    });

    it('TG2', () => {
      component.declarationFiles.data = [];
      const fakeFiles: File[] = [new File([window.atob('fakeblob')], 'foto.png', { type: 'image/png' })];
      component.procesSelectedFiles(fakeFiles);
      expect(component.declarationFiles.data.length).toBe(1);
    });

    it('TG3', () => {
      component.declarationFiles.data = [];
      const fakeFiles: File[] = [new File([window.atob('fakeblob')], 'factuur.pdf', { type: 'application/pdf' })];
      component.procesSelectedFiles(fakeFiles);
      expect(component.declarationFiles.data.length).toBe(1);
    });

    it('TG4', () => {
      component.declarationFiles.data = [];
      const fakeFiles: File[] = [new File([window.atob('fakeblob')], 'factuur.mp4', { type: 'video/mp4' })];
      component.procesSelectedFiles(fakeFiles);
      expect(component.declarationFiles.data.length).toBe(0);
    });

    it('TG7', () => {
      const byteArray = new Uint8Array(15000000);
      component.declarationFiles.data = [];
      const fakeFiles: File[] = [new File([byteArray], 'foto.jpg', { type: 'image/jpeg' })];
      component.procesSelectedFiles(fakeFiles);
      expect(component.declarationFiles.data.length).toBe(0);
    });
  });
});
