import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MonthlySales } from './monthly-sales.model'
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }
}
