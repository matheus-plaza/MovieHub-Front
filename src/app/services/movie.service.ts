import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieRequest, MovieResponse } from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/moviehub/movies';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  findAll(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  findById(id: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  save(movie: MovieRequest): Observable<MovieResponse> {
    return this.http.post<MovieResponse>(this.apiUrl, movie, { headers: this.getHeaders() });
  }

  update(id: number, movie: MovieRequest): Observable<MovieResponse> {
    return this.http.put<MovieResponse>(`${this.apiUrl}/${id}`, movie, { headers: this.getHeaders() });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
