import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../../models/imodels/IProduct';
import {Product} from '../../models/Product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  productList: Observable<Product[]>;
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.productList = data;
    });
  }

  initProduct() {
    this.product = {id: 1, name: 'Asus', price: 2100, type: 'Laptop'};
  }

  getProduct(id) {
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.getProductList();
      });
  }

  ngOnInit() {
    this.getProductList();
  }

}
