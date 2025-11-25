import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Sidebar} from '../../shared/sidebar/sidebar';
import { LucideAngularModule } from "lucide-angular";
import { UpcomingMeetings } from './upcoming-meetings/upcoming-meetings';

@Component({
  selector: 'app-meetings-page',
  imports: [
    NavbarComponent,
    Sidebar,
    LucideAngularModule,
    UpcomingMeetings
],
  templateUrl: './meetings-page.html',
  styleUrl: './meetings-page.css',
})
export class MeetingsPage {

}
