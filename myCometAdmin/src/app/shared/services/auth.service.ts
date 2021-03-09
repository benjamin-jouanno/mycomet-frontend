import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

const API_BASE_URL = 'http://127.0.0.1:3000/'

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
    return this.token;
  }

  public setToken(token) {
    this.token = token;
  }

  public deleteToken() {
    delete(this.token);
  }
}
