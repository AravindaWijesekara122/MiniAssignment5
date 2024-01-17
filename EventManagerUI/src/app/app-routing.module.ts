import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizerLoginComponent } from './components/organizer-login/organizer-login.component';
import { AttendeeLoginComponent } from './components/attendee-login/attendee-login.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizerDashboardComponent } from './components/organizer-dashboard/organizer-dashboard.component';
import { authGuard } from './guards/auth.guard';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { GenerateGuestListComponent } from './components/generate-guest-list/generate-guest-list.component';
import { AttendeeDashboardComponent } from './components/attendee-components/attendee-dashboard/attendee-dashboard.component';
import { AllEventsComponent } from './components/attendee-components/all-events/all-events.component';
import { UpcomingEventsComponent } from './components/attendee-components/upcoming-events/upcoming-events.component';
import { RegisteredEventsComponent } from './components/attendee-components/registered-events/registered-events.component';
//import { AuthGuard } from '/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'organizer-login', component: OrganizerLoginComponent },
  { path: 'attendee-login', component: AttendeeLoginComponent },
  { path: 'organizer-dashboard', component: OrganizerDashboardComponent }, //, canActivate: [authGuard]
  { path: 'create-event', component: CreateEventComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'update-event/:id', component: UpdateEventComponent},
  { path: 'guest-list/:id', component: GenerateGuestListComponent },

  {
    path: 'attendee-dashboard',
    component: AttendeeDashboardComponent,
    children: [
      { path: 'all-events', component: AllEventsComponent },
      { path: 'upcoming-events', component: UpcomingEventsComponent },
      { path: 'registered-events', component: RegisteredEventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
