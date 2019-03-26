import {Component, Inject, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-declaration-view',
  templateUrl: './declaration-view.component.html',
  styleUrls: ['./declaration-view.component.css']
})
export class DeclarationViewComponent implements OnInit {
  // @Input() declaration: Declaration;
  declaration: Declaration;
  employee = EMPLOYEE;
  empStatus = false;

  constructor(private dialogRef: MatDialogRef<DeclarationViewComponent>, @Inject(MAT_DIALOG_DATA) private data: Declaration) {
    // this.declaration = DECLARATIONS[data.id];
    this.declaration = data;
    this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
  }

  close() {
    this.dialogRef.close();
  }

  toDelete() {
    alert('pressed delete');
  }

  toEdit() {
    alert('pressed edit');
  }

  ngOnInit() {
  }

}
