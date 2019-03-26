import {Component, OnDestroy, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusEnum} from '../../models/StatusEnum';
import { Location } from '@angular/common';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {textInputValidator} from '../validators/textInputValidator';
import {Router} from '@angular/router';
import {EMPLOYEE} from '../../mocks/mock-employee';


@Component({
  selector: 'app-declaration-create',
  templateUrl: './declaration-create.component.html',
  styleUrls: ['./declaration-create.component.css']
})
export class DeclarationCreateComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  disabled = true;
  minDate: Date;
  maxDate: Date;
  maxDaysRange = 5;
  maxDesc = 30;
  controllerForCheck = ['fname', 'lname', 'description', 'empMessage'];

  constructor(private fb: FormBuilder, private location: Location,
              private router: Router, private declarationService: DeclarationService) {
    this.minDate = new Date(Date.now());
    this.maxDate = new Date(Date.now());
    this.maxDate.setDate(this.maxDate.getDate() + this.maxDaysRange);
    this.createForm = this.fb.group({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDesc),
        textInputValidator
      ]),
      empID: new FormControl({value: EMPLOYEE.id, disabled: this.disabled}),
      fname: new FormControl({value: EMPLOYEE.fname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc), textInputValidator]),
      lname: new FormControl({value: EMPLOYEE.lname, disabled: this.disabled}, [
        Validators.required, Validators.maxLength(this.maxDesc), textInputValidator]),
      serDate: new FormControl((new Date()).toISOString(), [Validators.required]),
      amount: new FormControl('', [
        Validators.required, Validators.max(3000), Validators.min(0)]),
      empMessage: new FormControl('', [
        Validators.maxLength(255),
        textInputValidator
      ])
    });

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

  private backToList() {
    this.router.navigate(['/declarationtable']);
  }

  private executeDeclarationCreation(createFormValue) {
    const declaration: Declaration = {
      id: null,
      description: createFormValue.description,
      date: createFormValue.serDate,
      empId: EMPLOYEE.id,
      status: StatusEnum.SUBMITTED,
      amount: createFormValue.amount,
      empComment: createFormValue.empMessage,
      manComment: '',
      files: []
    };

    this.declarationService.addDeclaration(declaration).subscribe(data => {
      console.log('Added: ' + JSON.stringify(data));
      this.backToList();
    }, error => console.log(error));
  }

  get formControllers(): any[] {
    const toReturn = [];

    for (const conName of this.controllerForCheck) {
      toReturn.push(this.createForm.get(conName));
    }

    return toReturn;
  }

  get maxSize() {
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
  }

}
