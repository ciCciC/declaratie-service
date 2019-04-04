import {Component, Inject, OnInit} from '@angular/core';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Declaration} from '../../models/Declaration';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {StatusEnum} from '../../models/StatusEnum';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';

@Component({
  selector: 'app-declaration-update',
  templateUrl: './declaration-update.component.html',
  styleUrls: ['./declaration-update.component.css']
})
export class DeclarationUpdateComponent implements OnInit {

  declaration: IDeclaration;
  employee = EMPLOYEE;
  empStatus = false;
  processDate = new Date();
  private declarationId: number;
  private declarationStatus: boolean;

  constructor(private dialogRef: MatDialogRef<DeclarationUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService) {
    this.declaration = data;
    this.declarationId = data.id;
    this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
    this.declarationStatus = data.status === StatusEnum.INPROGRESS || data.status === StatusEnum.APPROVED;
  }

  close() {
    this.dialogRef.close();
  }

  toSave() {
    alert('To Save');

    // if (this.declarationStatus) {
    //   this.errorService.unableToProcess(this.declaration.status);
    // } else {
    //   const toSave: IMessageDialog = {
    //     name: 'Bericht',
    //     message: 'Declaratie wijzigen?'
    //   };
    //
    //   const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: toSave});
    //   dialogRefMessage.afterClosed().subscribe(result => {
    //     if (result) {
    //       this.dialogRef.close(result);
    //     }
    //   });
    // }
  }

  ngOnInit() {
  }

}
