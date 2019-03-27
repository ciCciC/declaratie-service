import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {RestEnum} from '../../models/RestEnum';
import {DECLARATIONS} from '../../mocks/mock-declarations';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  private baseUrl = 'http://localhost:8080/api/declarations';
  private crudOperations = RestEnum;

  constructor(private http: HttpClient) { }

  addDeclaration(t: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(this.baseUrl + '/' + this.crudOperations.create, t, httpOptions);
  }

  getDeclaration(id: number): Observable<Declaration> {
    return this.http.get<Declaration>(this.baseUrl + '/' + id, httpOptions);
  }

  update(t: Declaration): boolean {
    return false;
  }

  deleteDeclaration(any): boolean {
    return false;
  }

  getDeclarations(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // getDeclarations(): Observable<IDeclaration[]> {
  //   return of(DECLARATIONS);
  // }

  // read(id): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //

}
