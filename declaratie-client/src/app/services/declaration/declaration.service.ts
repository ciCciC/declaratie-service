import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {environment} from '../../../environments/environment';
import {DeclarationFile} from '../../models/DeclarationFile';
import {forEach} from '@angular/router/src/utils/collection';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(private http: HttpClient) { }

  addDeclaration(toSave: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(environment.urlAddress + '/', toSave, this.generateHeaders());
  }

  addTest(toSave: Declaration, files: File[]): Observable<IDeclaration> {

    const dataToPost = new FormData();
    dataToPost.append('declaration', JSON.stringify(toSave));

    for (const file of files) {
      dataToPost.append('declarationfiles', file, file.name);
    }

    return this.http.post<IDeclaration>(environment.urlAddress + '/addDeclaration', dataToPost);
  }

  getDeclaration(id: number): Observable<IDeclaration> {
    return this.http.get<IDeclaration>(environment.urlAddress + '/read/' + id);
  }

  updateDeclaration(toUpdate: IDeclaration): Observable<IDeclaration> {

    return this.http.post<IDeclaration>(environment.urlAddress + '/' + toUpdate.id, toUpdate, this.generateHeaders());
  }

  deleteDeclaration(id: number): Observable<any> {
    return this.http.get<any>(environment.urlAddress + '/delete/' + id);
  }

  getDeclarations(): Observable<IDeclaration[]> {
    return this.http.get<IDeclaration[]>(environment.urlAddress).pipe(
      map( values => {
        return values.map(declaration => {
          const fileAtt: DeclarationFile[] = [];

          declaration.files.map(data => {
            const aa = new DeclarationFile();
            const splitted = data.filename.split('.');
            let filetype = splitted[splitted.length - 1];
            if (filetype === 'pdf') {
              filetype = 'application/' + filetype;
            } else {
              filetype = 'image/' + filetype;
            }

            const blob = this.dataURItoBlob(data.file, filetype);
            aa.filename = data.filename;
            aa.file = new File([blob], data.filename, { type: filetype });
            aa.id = data.id;
            aa.fileUrl = '';
            fileAtt.push(aa);

          });
          declaration.files = fileAtt;
          return declaration;
        });
      })
    );
  }

  private dataURItoBlob(dataURI, filetype) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: filetype });
    return blob;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // getDeclarations(): Observable<IDeclaration[]> {
  //   return of(DECLARATIONS);
  // }


}
