import {Component, OnDestroy, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../models/Employee';
import {StatusEnum} from '../../models/StatusEnum';
import { Location } from '@angular/common';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Subscription} from 'rxjs';
import {textInputValidator} from '../validators/textInputValidator';


@Component({
  selector: 'app-declaratie-create',
  templateUrl: './declaratie-create.component.html',
  styleUrls: ['./declaratie-create.component.css']
})
export class DeclaratieCreateComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  employee: Employee;
  disabled = true;
  minDate: Date;
  maxDate: Date;
  maxDaysRange = 5;
  maxDesc = 30;
  declarationSub: Subscription;
  controllerForCheck = ['fname', 'lname', 'description', 'empMessage'];

  constructor(private fb: FormBuilder, private location: Location,
              private declarationService: DeclarationService) {
    this.exampleEmployee();
    this.minDate = new Date(Date.now());
    this.maxDate = new Date(Date.now());
    this.maxDate.setDate(this.maxDate.getDate() + this.maxDaysRange);
    this.createForm = this.fb.group({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDesc),
        textInputValidator
      ]),
      empID: new FormControl({value: this.employee.id, disabled: this.disabled}),
      fname: new FormControl({value: this.employee.fname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc), textInputValidator]),
      lname: new FormControl({value: this.employee.lname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc), textInputValidator]),
      serDate: new FormControl((new Date()).toISOString(), [Validators.required]),
      bigNum: new FormControl('', [
        Validators.required, Validators.max(3000), Validators.min(0)]),
      smallNum: new FormControl('', [
        Validators.required, Validators.max(99), Validators.min(0)]),
      empMessage: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        textInputValidator
      ])
    });

  }

  private exampleEmployee() {
    this.employee = new Employee();
    this.employee.id = 1;
    this.employee.fname = 'Carlos';
    this.employee.lname = 'Bamos';
  }

  createDeclaration(createFormValue) {

    if (this.createForm.valid && this.examInputSecurity()) {
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
      status: StatusEnum.SUBMITTED,
      amount: Number(createFormValue.bigNum + '.' + String(createFormValue.smallNum).substring(0, 2)),
      emp_comment: createFormValue.empMessage,
      man_comment: '',
      files: ''
    };

    alert(JSON.stringify(declaration));

    // this.declarationSub = this.declarationService.create(declaration).subscribe(data => console.log(data));
  }

  get formControllers(): any[] {
    const toreturn = [];

    for (const conName of this.controllerForCheck) {
      toreturn.push(this.createForm.get(conName));
    }

    return toreturn;
  }

  private get maxSize() {
    return this.formControllers.length - 1;
  }

  private examInputSecurity() {
    let status = false;
    for (const conName of this.formControllers) {
      if (conName.invalid && conName.errors.lets_be_friends) {
        status = false;
        break;
      } else {
        status = true;
      }
    }
    return status;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.declarationSub.unsubscribe();
  }

}
