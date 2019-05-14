import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeclarationFile} from '../../models/DeclarationFile';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  readonly file: File;
  fileName: string;
  fileUrl: any;

  constructor(private dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: DeclarationFile) {
    this.file = data.file;
    this.fileName = data.filename;
  }

  close() {
    this.dialogRef.close();
  }

  private showImage() {
    const reader = new FileReader();
    reader.onload = (e: any) => this.fileUrl = reader.result;
    reader.readAsDataURL(this.file);
  }

  ngOnInit() {
    this.showImage();
  }

}
