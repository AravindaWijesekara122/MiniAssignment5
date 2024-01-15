import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7204/api/auth';

  constructor(private http: HttpClient) { }

  organizerLogin(email: string, password: string): Observable<any> {
    let role = "Organizer";
    const body = { email, password, role };
    return this.http.post(`${this.apiUrl}/organizer/login`, body);
  }

  attendeeLogin(email: string, password: string): Observable<any> {
    let role = "Attendee";
    const body = { email, password, role };
    return this.http.post(`${this.apiUrl}/attendee/login`, body);
  }
}
