import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private authService: AuthService, private http: HttpClient) { }

  addAd(formData: FormData): Observable<any> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/contentAdd`, formData, { headers });
  }

}
