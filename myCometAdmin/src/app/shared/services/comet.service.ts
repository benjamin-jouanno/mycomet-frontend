import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comet } from '../models/cometModel';

const API_BASE_URL = 'http://127.0.0.1:3000/'

@Injectable({
  providedIn: 'root'
})
export class CometService {

  constructor(private http: HttpClient) { }

  getAllComets(): Observable<any> {
    return this.http.get(API_BASE_URL + 'comet');
  }

  getCometById(cometId: number): Observable<Comet> {
    return this.http.get(API_BASE_URL + 'comet/' + cometId)
  }

  deleteComet(cometId: string): Observable<any> {
    return this.http.delete(API_BASE_URL + 'comet/' + cometId);
  }

  createComet(comet: Comet): Observable<any> {
    return this.http.post(API_BASE_URL + 'comet', comet);
  }

  updateComet(cometId: string, comet:Comet): Observable<any> {
    return this.http.put(API_BASE_URL + 'comet/' + cometId, comet);
  }
 }
