import { Component,   } from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Sidebar} from '../../shared/sidebar/sidebar';
import { LucideAngularModule } from "lucide-angular";
import { UpcomingMeetings } from './upcoming-meetings/upcoming-meetings';
import { UpcomingDetails } from './upcoming-details/upcoming-details';
import { Meeting } from './models/meetings.model';

@Component({
  selector: 'app-meetings-page',
  imports: [
    NavbarComponent,
    Sidebar,
    LucideAngularModule,
    UpcomingMeetings,
    UpcomingDetails
],
  templateUrl: './meetings-page.html',
  styleUrl: './meetings-page.css',
})
export class MeetingsPage {
  selectedMeeting: Meeting | null = null;
  

  onMeetingSelected(meeting: Meeting) {
    this.selectedMeeting = meeting;
  }

   closeDetails() {
    this.selectedMeeting = null;
  }
}
