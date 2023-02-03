import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {MessageCreator} from '../../models/MessageCreator';
import {DeclarationFile} from '../../models/DeclarationFile';
import {SecurityUtils} from '../../utils/SecurityUtils';

@Component({
  selector: 'app-declarationfile-upload',
  templateUrl: './declarationfile-upload.component.html',
  styleUrls: ['./declarationfile-upload.component.css']
})
export class DeclarationfileUploadComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  declarationFiles = new MatTableDataSource<DeclarationFile>();
  private files: DeclarationFile[] = [];
  acceptTypes = 'image/jpeg,image/jpg,image/png,application/pdf';
  private allowedTypes = ['jpg', 'jpeg', 'png', 'pdf'];
  private maxSize = 10;
  private divider = 1000000;

  @Input() set dataStore(declarationFiles) { this.declarationFiles.data = declarationFiles; this.files = declarationFiles; }
  @Output() uploaded = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    const element = document.getElementById('fileId') as HTMLElement;
    element.click();
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.procesSelectedFiles(event.target.files);
    }
  }

  procesSelectedFiles(files: File[]) {
    for (const file of files) {
      const selectedFile = <File>file;
      const splittedFiletype = selectedFile.type.split('/');
      const fileExtension = splittedFiletype[(splittedFiletype.length - 1)];

      if (this.allowedTypes.some(value => value === fileExtension) &&
        this.convertByteToMb(file.size) <= this.maxSize) {
        this.addDeclarationFile(selectedFile);
      }
    }
  }

  toDelete(declarationFile: DeclarationFile) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.files = this.files.filter(x => x !== declarationFile);
        this.declarationFiles.data = this.files;
        this.uploaded.emit(this.files);
      }
    });
  }

  private addDeclarationFile(file: File) {
    const declarationFile = new DeclarationFile();
    declarationFile.file = file;
    declarationFile.filename = SecurityUtils.cleanFilename(file.name);
    declarationFile.fileUrl = '';
    this.files.push(declarationFile);
    this.declarationFiles.data = this.files;
    this.uploaded.emit(this.files);
  }

  private convertByteToMb(byte: number) {
    return byte / this.divider;
  }

  ngOnInit() {

  }
}
