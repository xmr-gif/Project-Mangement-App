import { Component,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Sidebar} from '../../shared/sidebar/sidebar';
import { LucideAngularModule } from "lucide-angular";
import { UpcomingMeetings } from './upcoming-meetings/upcoming-meetings';
import { UpcomingDetails } from './upcoming-details/upcoming-details';
import { Meeting } from './models/meetings.model';
import { ScheduleMeetingModalComponent } from "./schedule-meeting/schedule-meeting";

@Component({
  selector: 'app-meetings-page',
  imports: [
    CommonModule,
    FormsModule,
    Sidebar,
    NavbarComponent,
    UpcomingMeetings,
    UpcomingDetails,
    ScheduleMeetingModalComponent,
    LucideAngularModule
],
  templateUrl: './meetings-page.html',
  styleUrl: './meetings-page.css',
})
export class MeetingsPage {
  selectedMeeting: Meeting | null = null;
  showScheduleModal: boolean | undefined;
   activeFilter: 'all' | 'today' | 'week' | 'my' = 'all';
  searchQuery: string = '';


  onMeetingSelected(meeting: Meeting) {
    this.selectedMeeting = meeting;
  }

   closeDetails() {
    this.selectedMeeting = null;
  }
  openScheduleModal() {
    this.showScheduleModal = true;
  }

  closeScheduleModal() {
    this.showScheduleModal = false;
  }

  onMeetingScheduled(meeting: Meeting) {
    console.log('New meeting scheduled:', meeting);
    // Here you can add logic to save the meeting to your backend or state
    this.showScheduleModal = false;
  }
   setFilter(filter: 'all' | 'today' | 'week' | 'my') {
    this.activeFilter = filter;
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
  }
}
