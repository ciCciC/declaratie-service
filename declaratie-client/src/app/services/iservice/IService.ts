import {Observable} from 'rxjs';

export interface IService<T> {

  create(t: T): Observable<T>;
  read(any): Observable<T>;
  update(t: T): boolean;
  delete(any): boolean;
  getAll(): Observable<T[]>;
}
