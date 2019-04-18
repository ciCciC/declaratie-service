import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {MessageCreator} from '../../models/MessageCreator';
import {DeclarationFile} from '../../models/DeclarationFile';

@Component({
  selector: 'app-declarationfile-upload',
  templateUrl: './declarationfile-upload.component.html',
  styleUrls: ['./declarationfile-upload.component.css']
})
export class DeclarationfileUploadComponent implements OnInit {
  actionValue = 'action';
  displayedColumns: string[] = ['name', 'action'];
  declarationFiles = new MatTableDataSource<DeclarationFile>();
  private files: DeclarationFile[] = [];
  acceptTypes = 'image/jpeg,image/jpg,image/png,application/pdf';
  private allowedTypes = ['jpg', 'jpeg', 'png', 'pdf'];
  private maxSize = 10;

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
      for (const file of event.target.files) {
        const selectedFile = <File>file;
        const splittedFiletype = selectedFile.type.split('/');
        const fileExtension = splittedFiletype[(splittedFiletype.length - 1)];
        this.addDeclarationFile(selectedFile, fileExtension);
      }
    }
  }

  toDelete(declarationFile: DeclarationFile) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.files = this.files.filter(u => u !== declarationFile);
        this.declarationFiles.data = this.files;
        this.uploaded.emit(this.files);
      }
    });
  }

  private addDeclarationFile(file: File, fileExtension: string) {
    if (this.allowedTypes.some(value => value === fileExtension) &&
      this.convertByteToMb(file.size) < this.maxSize) {
      const declarationFile = new DeclarationFile();
      declarationFile.file = file;
      declarationFile.filename = this.cleanFilename(file.name);
      declarationFile.fileUrl = '';
      this.files.push(declarationFile);
      this.declarationFiles.data = this.files;
      this.uploaded.emit(this.files);
    }
  }

  private cleanFilename(filename: string): string {
    const splitted = filename.split('.');
    return splitted.slice(0, splitted.length - 1)
      .join('')
      .replace(/(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script|#/, '') + '.' + splitted[splitted.length - 1];
  }

  private convertByteToMb(byte: number) {
    return byte / 1000000;
  }

  ngOnInit() {

  }
}
