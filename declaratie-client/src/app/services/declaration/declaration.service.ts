import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {RestEnum} from '../../models/RestEnum';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  private crudOperations = RestEnum;

  constructor(private http: HttpClient) { }

  addDeclaration(t: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(environment.urlAddress + '/' + this.crudOperations.create, t, this.generateHeaders());
  }

  getDeclaration(id: number): Observable<Declaration> {
    return this.http.get<Declaration>(environment.urlAddress + '/' + id, this.generateHeaders());
  }

  update(t: Declaration): boolean {
    return false;
  }

  deleteDeclaration(any): boolean {
    return false;
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

  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //

}
