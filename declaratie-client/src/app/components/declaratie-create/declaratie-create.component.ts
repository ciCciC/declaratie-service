import {Component, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {Employee} from '../../models/Employee';
import {DeclarationFile} from '../../models/DeclarationFile';
import {Status} from '../../models/Status';
import { Location } from '@angular/common';
import {DeclarationService} from '../../services/declaration/declaration.service';

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
  createForm: FormGroup;
  matcher: MyErrorStateMatcher;
  employee: Employee;
  disabled = true;
  minDate: Date;
  maxDate: Date;
  maxDaysRange = 5;
  maxDesc = 30;

  constructor(private location: Location, private declarationService: DeclarationService) {
    this.initEmployee();
    this.minDate = new Date(Date.now());
    this.maxDate = new Date(Date.now());
    this.maxDate.setDate(this.maxDate.getDate() + this.maxDaysRange);
    this.createForm = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDesc)
      ]),
      empID: new FormControl({value: this.employee.id, disabled: this.disabled}),
      fname: new FormControl({value: this.employee.fname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc)]),
      lname: new FormControl({value: this.employee.lname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc)]),
      serDate: new FormControl((new Date()).toISOString(), [Validators.required]),
      bigNum: new FormControl('', [
        Validators.required, Validators.maxLength(3)]),
      smallNum: new FormControl('', [
        Validators.required, Validators.maxLength(2)]),
      empMessage: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });

    this.matcher = new MyErrorStateMatcher();

  }

  private initEmployee() {
    this.employee = new Employee();
    this.employee.id = 1;
    this.employee.fname = 'Carlos';
    this.employee.lname = 'Bamos';
  }

  createDeclaration(createFormValue) {
    // this.date = this.serializedDate.value;
    // alert(this.date.toString());
    // const aa = +(this.bigNum + '.' + this.smallNum);
    // this.declaration.amount = aa;
    // alert(this.declaration.amount);
    // alert(this.description.value.toString());

    if (this.createForm.valid) {
      this.executeDeclarationCreation(createFormValue);
    }
  }

  onCancel() {
    this.createForm.reset();
    this.location.back();
  }

  private executeDeclarationCreation = (createFormValue) => {
    const declaration: Declaration = {
      id: null,
      description: createFormValue.description,
      date: createFormValue.serDate,
      emp_id: this.employee.id,
      status: Status.SUBMITTED,
      amount: Number(createFormValue.bigNum + '.' + String(createFormValue.smallNum).substring(0, 2)),
      emp_comment: createFormValue.emp_comment,
      man_comment: '',
      files: DeclarationFile[2]
    };

    this.declarationService.create(declaration).subscribe(res => {
      alert(res.id);
    });
  }

  ngOnInit() {

  }

}
