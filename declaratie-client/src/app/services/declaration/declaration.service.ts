import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IService} from '../iservice/IService';
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
export class DeclarationService implements IService<IDeclaration> {

  private baseUrl = 'http://localhost:8080/api/declaration';
  private crudOperations = RestEnum;

  constructor(private http: HttpClient) { }

  create(t: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(this.baseUrl + '/' + this.crudOperations.create, t, httpOptions);
  }

  read(any): Observable<Declaration> {
    return undefined;
  }

  update(t: Declaration): boolean {
    return false;
  }

  delete(any): boolean {
    return false;
  }

  // getAll(): Observable<IDeclaration[]> {
  //   return this.http.get<IDeclaration[]>(this.baseUrl + '/' + this.crudOperations.all + '/1', httpOptions);
  // }

  getAll(): Observable<IDeclaration[]> {
    return of(DECLARATIONS);
  }

  // read(id): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //

}
