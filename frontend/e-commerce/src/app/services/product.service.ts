import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private router: Router, private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const link = 'http://localhost:3000/api/products';
    return this.http.get<Product[]>(link);
  }

  createNewProduct(
    name: String,
    price: Number,
    category: String,
    quantity: Number,
    photoUrl: String
  ) {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:3000/api/add/product', {
          name: name,
          price: price,
          category: category,
          quantity: quantity,
          photoUrl: photoUrl,
        })
        .subscribe(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  editProduct(item): Observable<any> {
    const link = 'http://localhost:3000/api/modify/product';
    return this.http.put(link + `/${item.name}`, item);
  }

  deleteProduct(productName: String) {
    const deleteLink = 'http://localhost:3000/api/delete/product/';
    return new Promise((resolve, reject) => {
      this.http.delete(deleteLink + productName).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getProductById(item: String): Observable<Product> {
    const link = 'http://localhost:3000/api/product';
    return this.http.get<Product>(link + `/${item}`);
  }

  getProductByCategory(term): Observable<any> {
    const link = 'http://localhost:3000/api/productsByCategory';
    return this.http.get(link + `/${term}`);
  }
}
