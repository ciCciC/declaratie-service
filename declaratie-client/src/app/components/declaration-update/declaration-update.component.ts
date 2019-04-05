import {Component, Inject, OnInit} from '@angular/core';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Declaration} from '../../models/Declaration';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {StatusEnum} from '../../models/StatusEnum';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {textInputValidator} from '../validators/textInputValidator';
import {DeclarationTableComponent} from '../declaration-table/declaration-table.component';

@Component({
  selector: 'app-declaration-update',
  templateUrl: './declaration-update.component.html',
  styleUrls: ['./declaration-update.component.css']
})
export class DeclarationUpdateComponent implements OnInit {
  updateForm: FormGroup;
  private declaration: Declaration;
  // employee = EMPLOYEE;
  empStatus = false;
  processDate = new Date();
  private declarationId: number;
  private declarationStatus: boolean;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService,
              private declarationService: DeclarationService, private fb: FormBuilder) {

    this.declarationId = data.id;
    this.declaration = new Declaration();
    // this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
    this.declarationStatus = data.status === StatusEnum.INPROGRESS || data.status === StatusEnum.APPROVED;
    this.initForm();
    this.getDeclaration(data.id);
  }

  private initForm() {
    this.updateForm = this.fb.group({
      description: new FormControl(),
      amount: new FormControl(),
      empMessage: new FormControl(),
      manMessage: new FormControl()
    });
  }

  private fillInForm() {
    this.updateForm.controls.description.setValue(this.declaration.description);
    this.updateForm.controls.description.setValidators([Validators.required, Validators.maxLength(255), textInputValidator]);

    this.updateForm.controls.amount.setValue(this.declaration.amount);
    this.updateForm.controls.amount.setValidators([Validators.required, Validators.min(0)]);

    this.updateForm.controls.empMessage.setValue(this.declaration.empComment);
    this.updateForm.controls.empMessage.setValidators([Validators.maxLength(255), textInputValidator]);

    this.updateForm.controls.manMessage.setValue(this.declaration.manComment);
    this.updateForm.controls.manMessage.setValidators([Validators.maxLength(255), textInputValidator]);
  }

  private getDeclaration(id: number) {
    this.declarationService.getDeclaration(id).subscribe(data => {
      this.declaration = data;
      this.fillInForm();
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  close() {
    this.dialogRef.close();
  }

  // private updateDeclaration(createFormValue) {
  //
  //   if (this.createForm.valid && this.examInputSecurity()) {
  //     this.executeDeclarationCreation(createFormValue);
  //   }
  // }

  toSave(updateFormValue) {
    if (this.declarationStatus) {
      this.errorService.unableToProcess(this.declaration.status);
    } else {

      const toUpdate: IMessageDialog = {
        name: 'Bericht',
        message: 'Declaratie wijzigen?'
      };

      const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: toUpdate});
      dialogRefMessage.afterClosed().subscribe(result => {
        if (result) {
          this.proceedSaving();
          this.close();
        }
      });
    }
  }

  private proceedSaving() {
    this.declaration.id = this.declarationId;
    this.declaration.description = 'Dit is een test';
    this.declarationService.updateDeclaration(this.declaration).subscribe(data => {
      // Todo met succes gewijzigd !!
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  ngOnInit() {
  }

}
