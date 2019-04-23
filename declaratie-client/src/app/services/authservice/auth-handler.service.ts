import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {

  private rol = 'Lolz';

  constructor(private http: HttpClient) { }

  checkUser(): Observable<HttpHeaders> {
    return this.http.get<HttpHeaders>(environment.urlAddress, {observe: 'response'}).pipe(
      map(value => value.headers)
    );
  }

  // getCookie(name: string): string {
  //   return document.cookie
  //     .split(';')
  //     .filter(value => value.split('=')[0] === name)
  //     .map(value => value.split('=')[1]).pop().toLowerCase();
  // }
  //
  // setCookie(name: string, value: string) {
  //   document.cookie = `${name}=${value}`;
  // }

  setRol(rol: string) {
    this.rol = rol;
  }

  getRol() {
    return this.rol;
  }
}
