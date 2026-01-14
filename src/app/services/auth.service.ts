import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse, UserRequest, UserResponse } from '../models/auth.models';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/moviehub/auth';

  constructor(private http: HttpClient) {}

  login(dados: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, dados).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(dados: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, dados);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenValid(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    try {
      const decoded: any = jwtDecode(token);

      const expirationDate = decoded.exp;
      const currentDate = Math.floor(Date.now() / 1000);

      if (expirationDate < currentDate) {
        console.warn('Token expirado!');
        return false;
      }

      return true;

    } catch (error) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
