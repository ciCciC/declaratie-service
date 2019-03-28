import {Component, Inject, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {StatusEnum} from '../../models/StatusEnum';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';

@Component({
  selector: 'app-declaration-view',
  templateUrl: './declaration-view.component.html',
  styleUrls: ['./declaration-view.component.css']
})
export class DeclarationViewComponent implements OnInit {
  private declarationId: number;
  private declarationStatus: StatusEnum;
  declaration: Declaration;
  employee = EMPLOYEE;
  empStatus = false;
  processStatus = false;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationViewComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService) {
    // this.declaration = DECLARATIONS[data.id];
    this.declaration = data;
    this.declarationId = data.id;
    this.declarationStatus = data.status;
    this.processStatus = data.status !== StatusEnum.INPROGRESS;
    this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
  }

  close() {
    this.dialogRef.close();
  }

  toDelete() {
    if (this.declarationStatus === StatusEnum.INPROGRESS) {
      this.errorService.unableToDelete();
    } else {
      const toDelete: IMessageDialog = {
        name: 'Bericht',
        message: 'Declaratie verwijderen?'
      };

      const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: toDelete});
      dialogRefMessage.afterClosed().subscribe(result => {
        if (result) {
          this.dialogRef.close(result);
        }
      });
    }
  }

  toEdit() {
    alert('pressed edit');
  }

  ngOnInit() {
  }

}
