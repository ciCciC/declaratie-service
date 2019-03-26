import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationViewComponent } from './declaration-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule, MatIconModule} from '@angular/material';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe(DeclarationViewComponent.name, () => {
  let component: DeclarationViewComponent;
  let fixture: ComponentFixture<DeclarationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule],
      providers: [{provide: MatDialogRef, useValue: {}}, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      declarations: [DeclarationViewComponent]
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

// @NgModule({
//   imports: [MatIconModule, MatDialogModule, MaterialModule, MatFormFieldModule, AppModule]
// })
// export class DialogTestModule {
// }
