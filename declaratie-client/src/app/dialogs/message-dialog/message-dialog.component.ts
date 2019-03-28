import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  private statusOfConfirmation = true;

  constructor(private dialogRef: MatDialogRef<MessageDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: IMessageDialog) {}

  public closeDialog = () => {
    this.dialogRef.close();
  }

  public confirmationClick = () => {
    return this.statusOfConfirmation;
  }

  ngOnInit() {
  }

}
