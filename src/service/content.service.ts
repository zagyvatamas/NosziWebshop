import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor() { }
}
