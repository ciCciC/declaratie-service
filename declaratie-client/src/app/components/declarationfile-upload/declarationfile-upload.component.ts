import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {MessageCreator} from '../../models/MessageCreator';

@Component({
  selector: 'app-declarationfile-upload',
  templateUrl: './declarationfile-upload.component.html',
  styleUrls: ['./declarationfile-upload.component.css']
})
export class DeclarationfileUploadComponent implements OnInit {
  actionValue = 'action';
  displayedColumns: string[] = ['name', 'action'];
  declarationFiles = new MatTableDataSource<File>();
  private files: File[] = [];
  acceptTypes = 'image/jpeg,image/jpg,image/png,application/pdf';
  private allowedTypes = ['jpg', 'jpeg', 'png', 'pdf'];
  private maxSize = 10;

  /***
   * TODO hieraan werken dus aan de INPUT!!! Voor de update functionaliteit van een foto of pdf
   */
  @Input() set dataStore(fake) { this.declarationFiles.data = fake; }
  @Output() uploaded = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      for (const file of event.target.files) {
        const selectedFile = <File>file;
        const splittedFilename = selectedFile.name.split('.');
        const fileExtension = splittedFilename[(splittedFilename.length - 1)];
        this.addDeclarationFile(selectedFile, fileExtension);
      }
    }
  }

  toDelete(declarationFile) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.files = this.files.filter(u => u !== declarationFile);
        this.declarationFiles.data = this.files;
        this.uploaded.emit(this.files);
      }
    });
  }

  private addDeclarationFile(declarationFile, fileExtension: string) {
    if (this.allowedTypes.some(value => value === fileExtension) &&
      this.convertByteToMb(declarationFile.size) < this.maxSize) {
      this.files.push(declarationFile);
      this.declarationFiles.data = this.files;
      this.uploaded.emit(this.files);
    }
  }

  private convertByteToMb(byte: number) {
    return byte / 1000000;
  }

  ngOnInit() {

  }
}
