import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorDialogComponent} from '../../errorhandler/error-dialog/error-dialog.component';
import {IErrorDialog} from '../../models/imodels/IErrorDialog';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private dialogConfig: IErrorDialog;

  constructor(private dialog: MatDialog) { }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      this.handle404Error(error);
    } else if (error.status === 400) {
      this.handle400Error(error);
    } else if (error.status === 0) {
      this.handleZeroError(error);
    } else {
      this.handleOtherError(error);
    }
  }

  private handle404Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handle400Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialogConfig.message = 'Declaratie is niet verwerkbaar';
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handleZeroError(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialogConfig.message = 'Geen verbinding met de declaratie service';
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private handleOtherError(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialog.open(ErrorDialogComponent, {data: this.dialogConfig});
  }

  private createErrorMessage(error: HttpErrorResponse) {
    this.dialogConfig = error.error ? {
      statusCode: error.error['status'],
      message: error.error['message'],
    } : {
      statusCode: error.status,
      message: error.statusText,
    };
  }
}
