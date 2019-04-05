import {Component, Inject, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {StatusEnum} from '../../models/StatusEnum';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {RestEnum} from '../../models/RestEnum';
import {DeclarationUpdateComponent} from '../declaration-update/declaration-update.component';

@Component({
  selector: 'app-declaration-view',
  templateUrl: './declaration-view.component.html',
  styleUrls: ['./declaration-view.component.css']
})
export class DeclarationViewComponent implements OnInit {
  private declarationId: number;
  private declarationStatus: boolean;
  declaration: Declaration;
  employee = EMPLOYEE;
  empStatus = false;
  processStatus = false;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationViewComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService) {
    this.declaration = data;
    this.declarationId = data.id;
    this.processStatus = data.status !== StatusEnum.INPROGRESS && data.status !== StatusEnum.APPROVED;
    this.declarationStatus = !this.processStatus;
    this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
  }

  close() {
    this.dialogRef.close();
  }

  toDelete() {
    if (this.declarationStatus) {
      this.errorService.unableToProcess(this.declaration.status);
    } else {
      const toDelete: IMessageDialog = {
        name: 'Bericht',
        message: 'Declaratie verwijderen?'
      };

      const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: toDelete});
      dialogRefMessage.afterClosed().subscribe(result => {
        if (result) {
          this.dialogRef.close(RestEnum.delete);
        }
      });
    }
  }

  toEdit() {
    if (this.declarationStatus) {
      this.errorService.unableToProcess(this.declaration.status);
    } else {
      this.dialogRef.close(RestEnum.update);
    }
  }

  ngOnInit() {
  }

}
