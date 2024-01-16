// organizer-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-organizer-dashboard',
  templateUrl: './organizer-dashboard.component.html',
  styleUrls: ['./organizer-dashboard.component.css'],
})
export class OrganizerDashboardComponent implements OnInit {
  events: any[] = [];

  constructor(private organizerService: OrganizerService, private router: Router) {}

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

  navigateToCreateEvent(): void {
    this.router.navigate(['create-event']);
  }

  viewEventDetails(eventId: number): void {
    console.log('eventId:', eventId);
    this.router.navigate(['event-details', eventId]);
  }


}

