import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:8000/api';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/jwt-auth/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/register/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  ensureAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}/jwt-verify/`;
    const jwt = {token: token};
    return this.http.post(url, jwt, {headers: this.headers}).toPromise();
  }

}
