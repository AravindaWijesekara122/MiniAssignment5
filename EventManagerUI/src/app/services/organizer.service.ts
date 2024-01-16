import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private apiUrl = 'https://localhost:7204/api/organizer';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all-events`);
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-event`, eventData);
  }

  getEventById(eventId: number): Observable<any> {
    return this.http.get<Event>(`${this.apiUrl}/event/${eventId}`);
  }

  editEvent(eventId: number, updatedEvent: any): Observable<any> {
    return this.http.put<Event>(`${this.apiUrl}/update-event/${eventId}`, updatedEvent);
  }

  cancelEvent(eventId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-event/${eventId}`);
  }
}
