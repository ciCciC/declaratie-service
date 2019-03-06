import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IService} from '../iservice/IService';
import {Declaration} from '../../models/Declaration';
import {IDeclaration} from '../../models/imodels/IDeclaration';

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

  constructor(private http: HttpClient) { }

  create(t: IDeclaration): Observable<IDeclaration> {
    return this.http.post<IDeclaration>(this.baseUrl + '/create', t, httpOptions);
  }

  delete(any): boolean {
    return false;
  }

  getAll(): Observable<IDeclaration[]> {
    return this.http.get<IDeclaration[]>(this.baseUrl + '/all', httpOptions);
  }

  read(any): Observable<Declaration> {
    return undefined;
  }

  update(t: Declaration): boolean {
    return false;
  }

  // read(id): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //
  // getAll(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }


}
