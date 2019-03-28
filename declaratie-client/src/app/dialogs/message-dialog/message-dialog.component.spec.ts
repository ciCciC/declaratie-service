import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogComponent } from './message-dialog.component';
import {Declaration} from '../../models/Declaration';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe(MessageDialogComponent.name, () => {
  let component: MessageDialogComponent;
  let fixture: ComponentFixture<MessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers: [{provide: MatDialogRef, useValue: {}}, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      declarations: [ MessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
