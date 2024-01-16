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
    GenerateGuestListComponent
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
