import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EMPLOYEE} from '../../mocks/mock-employee';
import {Employee} from '../../models/Employee';
import {RoleEnum} from '../../models/RoleEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  checkUser(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.urlAddress + '/testget/' + id, {headers: this.generateHeaders(), observe: 'response'}).pipe(
      map(value => {
        const emp = <Employee>JSON.parse(value.headers.get('user'));
        if (emp.role === RoleEnum.MEDEWERKER) {
          emp.role = true;
        } else if (emp.role === RoleEnum.MANAGER) {
          emp.role = false;
        }
        return emp;
      })
    );
  }

  private generateHeaders() {
    const generated = new HttpHeaders({'Content-Type': 'application/json', 'user': JSON.stringify(EMPLOYEE[0])});
    return generated;
  }
}
