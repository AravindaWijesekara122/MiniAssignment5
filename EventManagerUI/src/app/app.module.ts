import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizerLoginComponent } from './components/organizer-login/organizer-login.component';
import { AttendeeLoginComponent } from './components/attendee-login/attendee-login.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizerDashboardComponent } from './components/organizer-dashboard/organizer-dashboard.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { GenerateGuestListComponent } from './components/generate-guest-list/generate-guest-list.component';
import { AttendeeDashboardComponent } from './components/attendee-components/attendee-dashboard/attendee-dashboard.component';
import { AllEventsComponent } from './components/attendee-components/all-events/all-events.component';
import { UpcomingEventsComponent } from './components/attendee-components/upcoming-events/upcoming-events.component';
import { RegisteredEventsComponent } from './components/attendee-components/registered-events/registered-events.component';
import { RegisterConfirmationComponent } from './components/attendee-components/register-confirmation/register-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerLoginComponent,
    AttendeeLoginComponent,
    HomeComponent,
    OrganizerDashboardComponent,
    EventDetailsComponent,
    CreateEventComponent,
    UpdateEventComponent,
    GenerateGuestListComponent,
    AttendeeDashboardComponent,
    AllEventsComponent,
    UpcomingEventsComponent,
    RegisteredEventsComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
