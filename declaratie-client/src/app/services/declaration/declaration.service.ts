import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {environment} from '../../../environments/environment';
import {DeclarationFile} from '../../models/DeclarationFile';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(private http: HttpClient) { }

  addDeclaration(toSave: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(environment.urlAddress + '/', toSave, this.generateHeaders());
  }

  getDeclaration(id: number): Observable<IDeclaration> {
    return this.http.get<IDeclaration>(environment.urlAddress + '/read/' + id);
  }

  updateDeclaration(toUpdate: IDeclaration): Observable<IDeclaration> {

    // const ss: DeclarationFile [] = [
    //   {id: 1,
    //   file: [] = [1, 2, 3],
    //   fileName: 'lolz.jpeg'},
    //   {id: 2,
    //   file: [] = [1, 2, 3],
    //   fileName: 'lolz.jpeg'}
    // ];

    return this.http.post<IDeclaration>(environment.urlAddress + '/' + toUpdate.id, toUpdate, this.generateHeaders());
  }

  deleteDeclaration(id: number): Observable<any> {
    return this.http.get<any>(environment.urlAddress + '/delete/' + id);
  }

  getDeclarations(): Observable<IDeclaration[]> {
    return this.http.get<IDeclaration[]>(environment.urlAddress);
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
