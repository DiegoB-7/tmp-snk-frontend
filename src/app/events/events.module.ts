import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventButtonComponent } from './components/create-event-button/create-event-button.component';
import { JoinEventButtonComponent } from './components/join-event-button/join-event-button.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    EventsComponent,
    CreateEventButtonComponent,
    JoinEventButtonComponent,
    StatsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    CreateEventButtonComponent,
    JoinEventButtonComponent,
    StatsCardComponent
  ]
})
export class EventsModule { }
