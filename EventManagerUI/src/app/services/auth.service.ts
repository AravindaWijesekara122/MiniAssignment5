import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  organizerId = 0;
  attendeeId = 0;
  private apiUrl = 'https://localhost:7204/api/auth';

  constructor(private http: HttpClient) { }

  setOrganizerId(id: number): void {
    this.organizerId = id;
  }
  getOrganizerId(): number{
    return this.organizerId;
  }

  setAttendeeId(id: number): void {
    this.attendeeId = id;
  }
  getAttendeeId(): number{
    return this.attendeeId;
  }

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

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
}
