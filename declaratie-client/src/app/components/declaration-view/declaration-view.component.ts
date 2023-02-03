import {Component, Inject, OnInit} from '@angular/core';
import {Declaration} from '../../models/Declaration';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {RestEnum} from '../../models/RestEnum';
import {ImageDialogComponent} from '../../dialogs/image-dialog/image-dialog.component';
import {MessageCreator} from '../../models/MessageCreator';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {AuthenticationService} from '../../services/authservice/authentication.service';
import {StateUtils} from '../../utils/StateUtils';
import {RoleEnum} from '../../models/RoleEnum';
import {DeclarationFile} from '../../models/DeclarationFile';


@Component({
  selector: 'app-declaration-view',
  templateUrl: './declaration-view.component.html',
  styleUrls: ['./declaration-view.component.css']
})
export class DeclarationViewComponent implements OnInit {
  private declarationId: number;
  isLoadingResults = true;
  declaration: Declaration;
  employee = EMPLOYEE[0];
  empStatus = false;
  processStatus = false;
  displayedColumns = ['file', 'download'];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DeclarationViewComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Declaration, private errorService: ErrorHandlerService,
              private declarationService: DeclarationService, private authenticationService: AuthenticationService) {
    this.declarationId = data.id;
    authenticationService.checkUser(data.id).subscribe(value => {
      this.empStatus = value.role;
      this.getDeclaration(data.id);
    });
  }

  private checkStatus() {
    if (this.empStatus) {
      this.processStatus = StateUtils.isAllowedToUpdate(this.declaration.status, RoleEnum.MEDEWERKER);
    } else {
      this.processStatus = StateUtils.isAllowedToUpdate(this.declaration.status, RoleEnum.MANAGER);
    }
  }

  private getDeclaration(id: number) {
    this.declarationService.getDeclaration(id).subscribe(data => {
      this.declaration = data;
      this.isLoadingResults = false;
      this.checkStatus();
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  close() {
    this.dialogRef.close();
  }

  openImage(declarationFile: DeclarationFile) {
    if (declarationFile.file.type.split('/')[1] !== 'pdf') {
      this.dialog.open(ImageDialogComponent, {width: '40%', data: declarationFile});
    } else {
      const objUrl = window.URL.createObjectURL(declarationFile.file);
      window.open(objUrl, declarationFile.filename);
      window.URL.revokeObjectURL(objUrl);
    }
  }

  toDelete() {
    if (this.empStatus) {
      if (StateUtils.isAllowedToDelete(this.declaration.status, RoleEnum.MEDEWERKER)) {
        const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
        dialogRefMessage.afterClosed().subscribe(result => {
          if (result) {
            this.dialogRef.close(RestEnum.delete);
          }
        });
      } else {
        this.errorService.unableToProcess(this.declaration.status);
      }
    } else {
      if (StateUtils.isAllowedToDelete(this.declaration.status, RoleEnum.MANAGER)) {
        const dialogRefMessage = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
        dialogRefMessage.afterClosed().subscribe(result => {
          if (result) {
            this.dialogRef.close(RestEnum.delete);
          }
        });
      } else {
        this.errorService.unableToProcess(this.declaration.status);
      }
    }
  }

  toEdit() {
    if (this.empStatus) {
      if (StateUtils.isAllowedToUpdate(this.declaration.status, RoleEnum.MEDEWERKER)) {
        this.dialogRef.close(RestEnum.update);
      } else {
        this.errorService.unableToProcess(this.declaration.status);
      }
    } else {
      if (StateUtils.isAllowedToUpdate(this.declaration.status, RoleEnum.MANAGER)) {
        this.dialogRef.close(RestEnum.update);
      } else {
        this.errorService.unableToProcess(this.declaration.status);
      }
    }
  }

  downloadFile() {
    alert('Upcoming user story: download !!');
  }

  ngOnInit() {
  }

}
