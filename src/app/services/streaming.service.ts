import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StreamingRequest, StreamingResponse } from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {
  private apiUrl = 'http://localhost:8080/moviehub/streaming';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  findAll(): Observable<StreamingResponse[]> {
    return this.http.get<StreamingResponse[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  save(streaming: StreamingRequest): Observable<StreamingResponse> {
    return this.http.post<StreamingResponse>(this.apiUrl, streaming, { headers: this.getHeaders() });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
