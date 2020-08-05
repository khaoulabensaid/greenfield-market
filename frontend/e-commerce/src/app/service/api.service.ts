import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Input } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  input : string;
  categoryUrl :string = 'http://localhost:3000/getCategory';
  productUrl :string = `http://localhost:3000/getProductsWithCategory/`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  
  constructor(private http: HttpClient) { }
  setInput (data){
    this.input = data
  }
  getInput (){
    return this.input
  }

  getCategories() {
    
    return this.http.get(`${this.categoryUrl}`);
  }

  // getProducts(input: string) {
  //   return this.http.get(`${this.productUrl}${input}`);
  // }
}
