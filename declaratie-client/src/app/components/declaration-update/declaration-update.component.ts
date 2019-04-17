import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Declaration} from '../../models/Declaration';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {StatusEnum} from '../../models/StatusEnum';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {textInputValidator} from '../validators/textInputValidator';
import {MessageCreator} from '../../models/MessageCreator';
import {DeclarationFile} from '../../models/DeclarationFile';

@Component({
  selector: 'app-declaration-update',
  templateUrl: './declaration-update.component.html',
  styleUrls: ['./declaration-update.component.css']
})
export class DeclarationUpdateComponent implements OnInit {
  updateForm: FormGroup;
  employee = EMPLOYEE;
  empStatus = false;
  processDate = new Date();
  private disabled = true;
  private declaration: Declaration;
  private declarationId: number;
  private declarationNotEditable: boolean;
  private declarationStatus: StatusEnum;
  private declarationFiles: DeclarationFile[] = [];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService,
              private declarationService: DeclarationService, private fb: FormBuilder) {

    this.declarationId = data.id;
    this.declaration = new Declaration();
    // this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
    this.initForm();
    this.getDeclaration(data.id);
  }

  private initForm() {
    this.updateForm = this.fb.group({
      description: new FormControl(),
      fname: new FormControl({value: EMPLOYEE.fname, disabled: this.disabled}),
      lname: new FormControl({value: EMPLOYEE.lname, disabled: this.disabled}),
      amount: new FormControl(),
      empMessage: new FormControl(),
      manMessage: new FormControl(),
      files: new FormControl()
    });
    this.updateForm.controls.description.setValidators([Validators.required, Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.fname.setValidators([Validators.required, textInputValidator]);
    this.updateForm.controls.lname.setValidators([Validators.required, textInputValidator]);
    this.updateForm.controls.amount.setValidators([Validators.required, Validators.min(0)]);
    this.updateForm.controls.empMessage.setValidators([Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.manMessage.setValidators([Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.files.setValidators([Validators.required, Validators.min(1)]);
  }

  private fillInForm() {
    this.updateForm.controls.description.setValue(this.declaration.description);
    this.updateForm.controls.amount.setValue(this.declaration.amount);
    this.updateForm.controls.empMessage.setValue(this.declaration.empComment);
    this.updateForm.controls.manMessage.setValue(this.declaration.manComment);
  }

  private getDeclaration(id: number) {
    this.declarationService.getDeclaration(id).subscribe(data => {
      this.declaration = data;
      this.declarationFiles = data.files;
      this.updateForm.controls.files.setValue(this.declarationFiles.length);
      this.fillInForm();
      this.declarationNotEditable = data.status === StatusEnum.INPROGRESS || data.status === StatusEnum.APPROVED;
      this.declarationStatus = data.status;
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  close() {
    this.dialogRef.close();
  }

  toSave(updateFormValue) {
    if (this.declarationNotEditable) {
      this.errorService.unableToProcess(this.declarationStatus);
      this.close();
    } else {
      if (this.updateForm.valid && this.declarationFiles.length > 0) {
        const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toUpdate()});
        dialogRefMessage.afterClosed().subscribe(result => {
          if (result) {
            this.executeDeclarationUpdate(updateFormValue);
            this.close();
          }
        });
      }
    }
  }

  onUploadedFiles(files: DeclarationFile[]) {
    this.declarationFiles = files;
    console.log(this.declarationFiles.length);
    this.updateForm.controls.files.setValue(this.declarationFiles.length);
  }

  private executeDeclarationUpdate(updateFormValue) {
    const declaration: Declaration = {
      id: this.declarationId,
      description: updateFormValue.description,
      date: new Date().toISOString(),
      empId: EMPLOYEE.id,
      status: StatusEnum.SUBMITTED,
      amount: updateFormValue.amount,
      empComment: updateFormValue.empMessage,
      manComment: updateFormValue.manMessage,
      files: []
    };

    if (this.declarationFiles.length > 0) {
      // this.declarationService.updateDeclaration(declaration, this.declarationFiles).pipe()
      this.declarationService.updateDeclaration(declaration, this.declarationFiles).subscribe(data => {
        // Todo met succes gewijzigd !!
      }, (error) => {
        this.errorService.handleError(error);
      });
    }
  }

  ngOnInit() {
  }

}
