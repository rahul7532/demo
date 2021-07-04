import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';7
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private moviesUrl = 'https://demo.credy.in/api/v1/usermodule/login/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //  Authorization: 'Bearer ' + localStorage.getItem('auth_token')
    }),
  };
  constructor(private http: HttpClient) {}

  loginFormToken(body: any): Observable<any> {
    return this.http.post(this.moviesUrl, body, this.httpOptions).pipe(map(response=>response));
  }
  getToken(){
    localStorage.getItem('Token');
  }
}
