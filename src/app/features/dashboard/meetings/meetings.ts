import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { MeetingsService } from '../../../services/meetings.service';
import { Meeting } from '../../meetings-page/models/meetings.model';

interface DisplayMeeting {
  title: string;
  time: string;
  duration: string;
}

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './meetings.html',
  styleUrls: ['./meetings.css']
})
export class MeetingsComponent implements OnInit {
  meetings: DisplayMeeting[] = [];

  constructor(private meetingsService: MeetingsService, private router: Router) {}

  ngOnInit(): void {
    // Get upcoming meetings (limit to 4)
    const upcomingMeetings = this.meetingsService.getUpcomingMeetings(3);
    this.meetings = upcomingMeetings.map(meeting => this.formatMeeting(meeting));
  }

  private formatMeeting(meeting: Meeting): DisplayMeeting {
    const meetingDate = new Date(`${meeting.dateDebut}T${meeting.heureDebut}`);
    const endDate = new Date(`${meeting.dateDebut}T${meeting.heureFin}`);
    
    // Calculate duration
    const durationMs = endDate.getTime() - meetingDate.getTime();
    const durationMinutes = Math.round(durationMs / (1000 * 60));
    const durationStr = durationMinutes < 60 ? `${durationMinutes}m` : `${Math.floor(durationMinutes / 60)}h`;

    // Format time display
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let timeDisplay = '';
    const meetingDateOnly = new Date(meeting.dateDebut);
    meetingDateOnly.setHours(0, 0, 0, 0);

    if (meetingDateOnly.getTime() === today.getTime()) {
      timeDisplay = `Today, ${meeting.heureDebut}`;
    } else if (meetingDateOnly.getTime() === tomorrow.getTime()) {
      timeDisplay = `Tomorrow, ${meeting.heureDebut}`;
    } else {
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      timeDisplay = meetingDate.toLocaleDateString('en-US', options);
    }

    return {
      title: meeting.titre,
      time: timeDisplay,
      duration: durationStr
    };
  }

  viewAllMeetings(): void {
    this.router.navigate(['/meetings']);
  }
}
