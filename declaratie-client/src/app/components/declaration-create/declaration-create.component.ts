import {Component, OnDestroy, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusEnum} from '../../models/StatusEnum';
import { Location } from '@angular/common';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {textInputValidator} from '../validators/textInputValidator';
import {Router} from '@angular/router';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {DeclarationFile} from '../../models/DeclarationFile';
import {DECLARATIONFILES} from '../../mocks/mock-declarationfiles';


@Component({
  selector: 'app-declaration-create',
  templateUrl: './declaration-create.component.html',
  styleUrls: ['./declaration-create.component.css']
})
export class DeclarationCreateComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  private disabled = true;
  private declarationFiles: File[] = [];
  processDate = new Date();

  fakeTest = [{name: 'lolz.jpg', size: 1234}, {name: 'lolz222.jpg', size: 1234}];

  constructor(private fb: FormBuilder, private location: Location,
              private router: Router, private declarationService: DeclarationService, private errorService: ErrorHandlerService) {
    this.createForm = this.fb.group({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        textInputValidator
      ]),
      empID: new FormControl({value: EMPLOYEE.id, disabled: this.disabled}),
      fname: new FormControl({value: EMPLOYEE.fname, disabled: this.disabled}, [
        Validators.required, textInputValidator]),
      lname: new FormControl({value: EMPLOYEE.lname, disabled: this.disabled}, [
        Validators.required, textInputValidator]),
      amount: new FormControl('', [
        Validators.required, Validators.min(0)]),
      empMessage: new FormControl('', [
        Validators.maxLength(255),
        textInputValidator
      ]),
      files: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  createDeclaration(createFormValue) {
    if (this.createForm.valid && this.declarationFiles.length > 0) {
      this.executeDeclarationCreation(createFormValue);
    }
  }

  onCancel() {
    this.createForm.reset();
    this.location.back();
  }

  // private backToList() {
  //   this.router.navigateByUrl('/declarationtable');
  // }

  onUploadedFiles(files: File[]) {
    this.declarationFiles = files;
    this.createForm.controls.files.setValue(this.declarationFiles.length);
  }

  private executeDeclarationCreation(createFormValue) {

    const declaration: Declaration = {
      id: null,
      description: createFormValue.description,
      date: new Date().toISOString(),
      empId: EMPLOYEE.id,
      status: StatusEnum.SUBMITTED,
      amount: createFormValue.amount,
      empComment: createFormValue.empMessage,
      manComment: '',
      files: null
    };

    if (this.declarationFiles.length > 0) {
      alert(JSON.stringify(this.declarationFiles[0].name));
    }

    // this.declarationService.addDeclaration(declaration).subscribe(data => {
    //  this.createForm.reset();
    //   this.backToList();
    // }, error => {{
    //   this.errorService.handleError(error);
    // }});
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
