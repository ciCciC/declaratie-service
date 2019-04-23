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
import {AuthHandlerService} from '../../services/authservice/auth-handler.service';

@Component({
  selector: 'app-declaration-update',
  templateUrl: './declaration-update.component.html',
  styleUrls: ['./declaration-update.component.css']
})
export class DeclarationUpdateComponent implements OnInit {
  updateForm: FormGroup;
  employee = EMPLOYEE[0];
  empStatus: boolean;
  processDate = new Date();
  private disabledForAll = true;
  private declaration: Declaration;
  private declarationId: number;
  private declarationNotEditable: boolean;
  private declarationStatus: StatusEnum;
  private declarationFiles: DeclarationFile[] = [];
  private statusDisabledForMan: StatusEnum [] = [StatusEnum.REJECTED, StatusEnum.APPROVED];
  private statusChosen = StatusEnum.NONE;
  statusList: StatusEnum [] = [StatusEnum.NONE, StatusEnum.APPROVED, StatusEnum.REJECTED];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService,
              private declarationService: DeclarationService, private fb: FormBuilder) {
    this.declarationId = data.id;
    this.declaration = new Declaration();
    // this.empStatus = this.authHandlerService.getRol() === 'medewerker';
    this.empStatus = true;
    this.initForm();
    this.getDeclaration(data.id);
  }

  private initForm() {
    this.updateForm = this.fb.group({
      description: new FormControl(),
      fname: new FormControl({value: this.employee.fname, disabled: this.disabledForAll}),
      lname: new FormControl({value: this.employee.lname, disabled: this.disabledForAll}),
      amount: new FormControl(),
      empMessage: new FormControl(),
      manMessage: new FormControl(),
      files: new FormControl(),
      currentStatus: new FormControl(),
      changeStatus: new FormControl()
    });
    this.updateForm.controls.description.setValidators([Validators.required, Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.fname.setValidators([Validators.required, textInputValidator]);
    this.updateForm.controls.lname.setValidators([Validators.required, textInputValidator]);
    this.updateForm.controls.amount.setValidators([Validators.required, Validators.min(0)]);
    this.updateForm.controls.empMessage.setValidators([Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.manMessage.setValidators([Validators.maxLength(255), textInputValidator]);
    this.updateForm.controls.files.setValidators([Validators.required, Validators.min(1)]);
  }

  private disableForManager() {
    this.updateForm.controls.description.disable();
    this.updateForm.controls.amount.disable();
    this.updateForm.controls.empMessage.disable();
    this.updateForm.controls.manMessage.enable();
    this.updateForm.controls.currentStatus.disable();

    if (this.statusDisabledForMan.some(value => value === this.declaration.status)) {
      this.updateForm.controls.changeStatus.disable();
    } else {
      this.updateForm.controls.changeStatus.enable();
    }
  }

  private disableForEmployee() {
    this.updateForm.controls.description.enable();
    this.updateForm.controls.amount.enable();
    this.updateForm.controls.manMessage.disable();
    this.updateForm.controls.empMessage.enable();
    this.updateForm.controls.currentStatus.disable();
    this.updateForm.controls.changeStatus.disable();
  }

  private fillInForm() {
    this.updateForm.controls.description.setValue(this.declaration.description);
    this.updateForm.controls.amount.setValue(this.declaration.amount);
    this.updateForm.controls.empMessage.setValue(this.declaration.empComment);
    this.updateForm.controls.manMessage.setValue(this.declaration.manComment);
    this.updateForm.controls.currentStatus.setValue(this.declaration.status);

    if (this.empStatus) {
      this.disableForEmployee();
    } else {
      this.disableForManager();
    }
  }

  changeStatus(chosenStatus: StatusEnum) {
    this.statusChosen = chosenStatus;
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
    if (this.empStatus) {
      if (this.declarationNotEditable) {
        this.errorService.unableToProcess(this.declarationStatus);
        this.close();
      } else {
        this.declarationStatus = StatusEnum.SUBMITTED;
        this.checkUpdateForm(updateFormValue);
      }
    } else {
      if (!this.statusDisabledForMan.some(value => value === this.declarationStatus)) {
        this.declarationStatus = this.statusChosen !== StatusEnum.NONE ? this.statusChosen : this.declarationStatus;
      }
      this.checkUpdateForm(updateFormValue);
    }
  }

  private checkUpdateForm(updateFormValue) {
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

  onUploadedFiles(files: DeclarationFile[]) {
    this.declarationFiles = files;
    this.updateForm.controls.files.setValue(this.declarationFiles.length);
  }

  private executeDeclarationUpdate(updateFormValue) {
    const declaration: Declaration = {
      id: this.declarationId,
      description: updateFormValue.description,
      date: new Date().toISOString(),
      empId: this.employee.id,
      status: this.declarationStatus,
      amount: updateFormValue.amount,
      empComment: updateFormValue.empMessage,
      manComment: updateFormValue.manMessage,
      files: []
    };

    this.declarationService.updateDeclaration(declaration, this.declarationFiles).subscribe(data => {
      // Todo met succes gewijzigd !!
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  ngOnInit() {
  }

}
