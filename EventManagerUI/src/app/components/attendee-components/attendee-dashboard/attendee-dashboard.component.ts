// attendee-dashboard.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendee-dashboard',
  templateUrl: './attendee-dashboard.component.html',
  styleUrls: ['./attendee-dashboard.component.css'],
})
export class AttendeeDashboardComponent {
  constructor(private router: Router) {}

  navigateToAllEvents(): void {
    this.router.navigate(['/attendee-dashboard/all-events']);
  }

  navigateToUpcomingEvents(): void {
    this.router.navigate(['/attendee-dashboard/upcoming-events']);
  }

  navigateToRegisteredEvents(): void {
    this.router.navigate(['/attendee-dashboard/registered-events']);
  }

  
}
