import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';


const API_BASE_URL = 'http://127.0.0.1:3000/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) { }

  getUser(userId: number): Observable<User> {
    return this.httpService.get(API_BASE_URL + 'user/' + userId);
  }

  getAllUsers(): Observable<any> {
    return this.httpService.get(API_BASE_URL + 'users');
  }

  updateUser(userId: number, user: User): Observable<any> {
    return this.httpService.put(API_BASE_URL + 'user/' + userId, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpService.delete(API_BASE_URL + 'user/' + userId);
  }

  createUser(user: User): Observable<any> {
    return this.httpService.post(API_BASE_URL + 'register', user);
  }

  getByToken(token: string): Observable<any> {
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders({'x-access-token': token}), 
    };
    return this.httpService.get(API_BASE_URL + 'me', requestOptions);
  }
}
