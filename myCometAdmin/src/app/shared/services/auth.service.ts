import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

const API_BASE_URL = 'http://127.0.0.1:3000/'
const prefix = 'MCBO_'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private httpService: HttpClient) {
    this.deleteToken();
  }

  login(user: User): Observable<any>{
    return this.httpService.post(API_BASE_URL + 'login/', user);
  }

  public getToken(): string {
    if (!this.token) {
      this.setToken(JSON.parse(localStorage.getItem(prefix + 'token')))
    }
    return this.token;
  }

  public setToken(token) {
    this.token = token;
    localStorage.setItem(prefix + 'token', JSON.stringify(token));
  }

  public deleteToken() {
    delete(this.token);
  }
}
