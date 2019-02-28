import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {IService} from '../iservice/IService';
import {Declaration} from '../../models/Declaration';
import {catchError, tap} from 'rxjs/operators';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {log} from 'util';
import {ITestme} from '../../models/imodels/ITestme';

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

  getAll(): Observable<Declaration[]> {
    return undefined;
  }

  read(any): Observable<Declaration> {
    return undefined;
  }

  update(t: Declaration): boolean {
    return false;
  }


}
