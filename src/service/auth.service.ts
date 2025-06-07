import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { LoginData } from '../interfaces/login';
import { RegisterData } from '../interfaces/register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; 
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router : Router) {}

  login(email: string, password: string): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => localStorage.setItem(this.tokenKey, response.token))
    );
  }

  register(username: string,email:string, password: string): Observable<RegisterData> {
    return this.http.post<RegisterData>(`${this.apiUrl}/register`, {username, email, password})
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['login'])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('Token nem található!'));
    }
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers });
  }
}
