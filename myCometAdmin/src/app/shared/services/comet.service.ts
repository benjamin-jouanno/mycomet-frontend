import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comet } from '../models/cometModel';
import { AuthService } from './auth.service';

const API_BASE_URL = 'http://127.0.0.1:3000/'

@Injectable({
  providedIn: 'root'
})
export class CometService {
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private auth: AuthService) {
    this.headers = new HttpHeaders({
      'Authorization': `${this.auth.getToken()}`
    })
  }

  getAllComets(): Observable<any> {
    return this.http.get((API_BASE_URL + 'comet'), { headers: this.headers });
  }

  getCometById(cometId: string): Observable<Comet> {
    return this.http.get(API_BASE_URL + 'comet/' + cometId, { headers: this.headers });
  }

  deleteComet(cometId: string): Observable<any> {
    return this.http.delete(API_BASE_URL + 'comet/' + cometId, { headers: this.headers });
  }

  createComet(comet: Comet): Observable<any> {
    return this.http.post(API_BASE_URL + 'comet', comet, { headers: this.headers });
  }

  updateComet(cometId: string, comet:Comet): Observable<any> {
    return this.http.put(API_BASE_URL + 'comet/' + cometId, comet, { headers: this.headers });
  }
 }
