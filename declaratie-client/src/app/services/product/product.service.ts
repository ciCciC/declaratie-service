import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IProduct} from '../../models/imodels/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) { }

  getProduct(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
