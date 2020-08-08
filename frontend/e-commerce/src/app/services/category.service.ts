import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { Category } from '../models/category.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
              private router: Router,
              private http: HttpClient
  ) { }
  getCategories(): Observable<Category []> {
    const link = "http://localhost:3000/api/categories"                  
      return this.http.get<Category []>(link);
   }
   
  createNewCategory(name: String) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/add/category',
        { name: name})
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
  getCategoryByName(item: String): Observable<Category> {
    const link = 'http://localhost:3000/api/categories';
    return this.http.get<Category>(link + `/${item}`);
  }

}
