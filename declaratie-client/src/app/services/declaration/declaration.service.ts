import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {environment} from '../../../environments/environment';
import {DeclarationFile} from '../../models/DeclarationFile';
import {map} from 'rxjs/operators';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {DECLARATIONS} from '../../mocks/mock-declarations';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(private http: HttpClient) { }

  addDeclaration(toSave: Declaration, files: DeclarationFile[]): Observable<IDeclaration> {

    const dataToPost = new FormData();
    dataToPost.append('declaration', JSON.stringify(toSave));

    for (const file of files) {
      dataToPost.append('declarationfiles', file.file, file.filename);
    }

    return this.http.post<IDeclaration>(environment.urlAddress + '/addDeclaration', dataToPost);
  }

  getDeclaration(id: number): Observable<IDeclaration> {
    return this.http.get<IDeclaration>(environment.urlAddress + '/' + id).pipe(
      map(declaration => {
        const declarationFiles: DeclarationFile[] = [];
        declaration.files.map(data => {
          declarationFiles.push(this.transformRetrievedFiles(data));
        });
        declaration.files = declarationFiles;
        return declaration;
      })
    );
  }

  updateDeclaration(toUpdate: IDeclaration, declarationFiles: DeclarationFile[]): Observable<IDeclaration> {
    const dataToPost = new FormData();
    dataToPost.append('declaration', JSON.stringify(toUpdate));

    for (const file of declarationFiles) {
      dataToPost.append('declarationfiles', file.file, file.filename + '#' + (file.id === undefined ? 'noid' : file.id));
    }

    return this.http.post<IDeclaration>(environment.urlAddress + '/updateDeclaration/' + toUpdate.id, dataToPost);
  }

  deleteDeclaration(id: number): Observable<any> {
    return this.http.delete<any>(environment.urlAddress + '/' + id);
  }

  // getChunkDeclarations(from: number, pagesize: number): Observable<IDeclaration[]> {
  //   return this.http.get<IDeclaration[]>(environment.urlAddress + '/paging/' + from + '/' + pagesize);
  // }

  getDeclarations(): Observable<IDeclaration[]> {
    const toReturn = this.http.get<IDeclaration[]>(environment.urlAddress + '/testgetall', {headers: this.generateHeaders()});

    // return this.http.get<IDeclaration[]>(environment.urlAddress + '/', {headers: this.generateHeaders()});
    return toReturn;
  }

  getMocks(): Observable<IDeclaration[]> {
    return of(DECLARATIONS);
  }

  private transformRetrievedFiles(data): DeclarationFile {
    const declarationFile = new DeclarationFile();
    const splitted = data.filename.split('.');
    let filetype = splitted[splitted.length - 1];
    if (filetype === 'pdf') {
      filetype = 'application/' + filetype;
    } else {
      filetype = 'image/' + filetype;
    }
    const blob = this.dataURItoBlob(data.file, filetype);
    declarationFile.filename = data.filename;
    declarationFile.file = new File([blob], data.filename, { type: filetype });
    declarationFile.id = data.id;
    declarationFile.fileUrl = '';
    return declarationFile;
  }

  private dataURItoBlob(dataURI, filetype) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: filetype });
  }

  private generateHeaders() {
    const generated = new HttpHeaders({'Content-Type': 'application/json', 'user': JSON.stringify(EMPLOYEE[0])});
    return generated;

    // return new HttpHeaders({'Content-Type': 'application/json'});
  }
}
