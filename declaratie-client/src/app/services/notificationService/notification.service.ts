import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NotificationDialogComponent} from '../../dialogs/notification-dialog/notification-dialog.component';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private name = 'Message';

  constructor(private dialog: MatDialog) { }

  createConfirmation() {
    const conf: IMessageDialog = {
      name: name,
      message: 'Created succesfully'
    };
    this.dialog.open(NotificationDialogComponent, {data: conf, disableClose: true});
  }

  updateConfirmation() {
    const conf: IMessageDialog = {
      name: name,
      message: 'Updated succesfully'
    };
    this.dialog.open(NotificationDialogComponent, {data: conf, disableClose: true});
  }

  deleteConfirmation() {
    const conf: IMessageDialog = {
      name: name,
      message: 'Deleted succesfully'
    };
    this.dialog.open(NotificationDialogComponent, {data: conf, disableClose: true});
  }
}
