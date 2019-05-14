import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import {IErrorDialog} from '../../models/imodels/IErrorDialog';
import {StatusEnum} from '../../models/StatusEnum';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private dialogConfig: IErrorDialog;
  private errorName = 'Error message';

  constructor(private dialog: MatDialog) { }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else if (error.status === 400) {
      this.handle400Error(error);
    } else if (error.status === 0) {
      this.handleZeroError(error);
    } else {
      this.handleOtherError(error);
    }
  }

  private handle500Error(error: HttpErrorResponse) {
    console.log(error);
    this.createErrorMessage(error);
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handle404Error(error: HttpErrorResponse) {
    console.log(error);
    // this.createErrorMessage(error);

    this.dialogConfig = {
      statusCode: error.status,
      name: this.errorName,
      message: error.error,
    };

    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handle400Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handleZeroError(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialogConfig.message = 'Geen verbinding met de declaratie service';
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  public unableToProcess(status: StatusEnum) {
    this.dialogConfig = {
      statusCode: 400,
      name: this.errorName,
      message: 'Declaratie is ' + status,
    };
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handleOtherError(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private createErrorMessage(error: HttpErrorResponse) {
    this.dialogConfig = error.error ? {
      statusCode: error.error['status'],
      name: this.errorName,
      message: error.error['message'],
    } : {
      statusCode: error.status,
      name: this.errorName,
      message: error.statusText,
    };
  }
}
