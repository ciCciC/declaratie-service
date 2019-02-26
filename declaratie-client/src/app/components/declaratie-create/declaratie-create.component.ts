import { Component, OnInit } from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {Employee} from '../../models/Employee';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-declaratie-create',
  templateUrl: './declaratie-create.component.html',
  styleUrls: ['./declaratie-create.component.css']
})
export class DeclaratieCreateComponent implements OnInit {
  declaration = new Declaration();
  descriptionFormControl: FormControl;
  disableSelect: FormControl;
  matcher: MyErrorStateMatcher;
  buttonFormGroup: FormGroup;
  serializedDate: FormControl;
  date;
  bigNum: string;
  smallNum: string;
  employee: Employee;

  constructor(private _formBuilder: FormBuilder) {
    this.descriptionFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.matcher = new MyErrorStateMatcher();

    this.disableSelect = new FormControl(true);
    this.date = new FormControl(new Date());
    this.serializedDate = new FormControl((new Date()).toISOString());
    this.date = new Date();
    this.employee = new Employee();
    this.employee.id = 1;
    this.employee.fname = 'Carlos';
    this.employee.lname = 'Bamos';
  }

  create(any) {
    this.date = this.serializedDate.value;
    alert(this.date.toString());
    const aa = +(this.bigNum + '.' + this.smallNum);
    this.declaration.amount = aa;
    alert(this.declaration.amount);
  }

  ngOnInit() {
    this.buttonFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    // this.buttonFormGroup.controls['medewerkerID'].disable();
  }

}
