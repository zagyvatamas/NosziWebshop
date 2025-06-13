import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContent } from '../interfaces/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'http://localhost:3000/api/content';

  constructor(private authService: AuthService, private http: HttpClient) { }

  addAd(formData:FormData): Observable<any> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/contentAdd`, formData, { headers });
  }

  getAds(): Observable<IContent[]> {
    return this.http.get<IContent[]>(`${this.apiUrl}/contentAll`)
  }

}
