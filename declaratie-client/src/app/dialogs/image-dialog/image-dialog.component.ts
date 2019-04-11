import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeclarationFile} from '../../models/DeclarationFile';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  private file: File;
  fileUrl: any;
  fileType: string;

  constructor(private dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: DeclarationFile,
              private sanitizer: DomSanitizer) {
    this.file = data.file;
  }

  close() {
    this.dialogRef.close();
  }

  private showImage() {
    const reader = new FileReader();
    reader.onload = (e: any) => this.fileUrl = reader.result;
    reader.readAsDataURL(this.file);
  }

  private showPdf() {
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.file));
  }

  ngOnInit() {
    if (this.file) {
      this.fileType = this.file.type.split('/')[1];

      if (this.fileType !== 'pdf') {
        this.showImage();
      } else {
        this.showPdf();
      }
    }
  }

}
