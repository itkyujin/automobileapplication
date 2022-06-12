/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // Add car
  AddCar(data: Car): Observable<any> {
    let API_URL = `${this.endpoint}/add-car`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all cars
  GetCars() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get car
  GetCar(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-car/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update car
  UpdateCar(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-car/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete car
  DeleteCar(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-car/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}