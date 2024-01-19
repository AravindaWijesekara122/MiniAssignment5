import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {
  private registrationResponse: any;
  private apiUrl = 'https://localhost:7204/api/customer';

  constructor(private http: HttpClient) {}

  setRegistrationResponse(response: any): void {
    this.registrationResponse = response;
  }

  getRegistrationResponse(): any {
    return this.registrationResponse;
  }

  upcomingEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/upcoming`);
  }

  registeredEvents(attendeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/registered-events/${attendeeId}`);
  }

  registerForEvent(eventId: number, attendeeId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/${eventId}/${attendeeId}`, null);
  }

  unregisterForEvent(eventId: number, attendeeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/unregister/${eventId}/${attendeeId}`);
  }

}
