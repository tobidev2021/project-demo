import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {
  }

  get<T>(endpoint: string, param?: any): Observable<T> {
    return this.http.get(`${endpoint}`, param).pipe(
      catchError(error => {
        return throwError(error);
      })
    ) as Observable<T>;
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post(`${endpoint}`, body).pipe(
      catchError(error => {
        return throwError(error);
      })
    ) as Observable<T>;
  }

  put<T>(endpoint: string, body): Observable<T> {
    return this.http.put(`${endpoint}`, body).pipe(
      catchError(error => {
        return throwError(error);
      })
    ) as Observable<T>;
  }

  patch<T>(endpoint: string, body): Observable<T> {
    return this.http.patch(`${endpoint}`, body).pipe(
      catchError(error => {
        return throwError(error);
      })
    ) as Observable<T>;
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete(`${endpoint}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    ) as Observable<T>;
  }
}
