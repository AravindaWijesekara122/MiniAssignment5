// all-events.component.ts

import { Component, OnInit } from '@angular/core';
import { AttendeeService } from 'src/app/services/attendee.service';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent implements OnInit {
  events: any[] = [];

  constructor(
    private attendeeService: AttendeeService, 
    private organizerService: OrganizerService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.organizerService.getEvents().subscribe({
      next: (events) => {
        console.log(events);
        this.events = events;
      },
      error: (error) => {
        console.error('Error loading events', error);
      }
    });
  }
}

