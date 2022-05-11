import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
export const environment = {
  apiUrl: 'https://dev.volantesw.com/api',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(protected httpClient: HttpClient) {}
  login(data: any): Observable<any> {
    // let data = {
    //   Username: 'admin',
    //   Password: '123456',
    //   RememberMe: false,
    // };

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Accept', 'application/json/;text/json;*/*'),
      withCredentials: true,
    };

    return this.httpClient.post(
      environment.apiUrl + '/auth/credentials',
      data,
      options
    );
  }

  logout(): Observable<any> {
    //return this.httpClient.post(environment.apiUrl + '/auth/logout', {});
    return this.httpClient.get(environment.apiUrl + '/app');
  }

  profile(): Observable<any> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Accept', 'application/json/;text/json;*/*'),
      withCredentials: true,
    };

    return this.httpClient.get(environment.apiUrl + '/profiles/my', options);
  }
  getapp(): Observable<any> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Accept', 'application/json/;text/json;*/*'),
      withCredentials: true,
    };
    return this.httpClient.get(environment.apiUrl + '/app', options);
  }

  getappenvironment(): Observable<any> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Accept', 'application/json/;text/json;*/*'),
      withCredentials: true,
    };
    return this.httpClient.get(
      environment.apiUrl + '/app/environment',
      options
    );
  }

  getappopenapi(): Observable<any> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Accept', 'application/json/;text/json;*/*'),
      withCredentials: true,
    };
    return this.httpClient.get(environment.apiUrl + '/openapi', options);
  }
}
