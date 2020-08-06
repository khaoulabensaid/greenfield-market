import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  categoryUrl :string = 'http://localhost:3000/getCategory';
  productUrl :string = `http://localhost:3000/getProductsWithCategory/`;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  message : string;
  constructor(private http: HttpClient) { }
 
  setMessage(data){
    this.message = data;
  }

  getMessage(){
    return this.message
  }


  getCategories() {
    
    return this.http.get(`${this.categoryUrl}`);
  }

  getProducts(message) : Observable<any> {
    
    
    return this.http.get(`${this.productUrl}${message}`);
  }
}
