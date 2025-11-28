import { Component, computed, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";
import { Meeting } from '../models/meetings.model';
import { MeetingsService } from '../../../services/meetings.service';

@Component({
  selector: 'app-upcoming-meetings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './upcoming-meetings.html',
  styleUrl: './upcoming-meetings.css',
})
export class UpcomingMeetings implements OnInit {
  // Event emitter to send selected meeting to parent
  onMeetingSelect = output<Meeting>();
  
  // Receive selected meeting from parent
  selectedMeeting = input<Meeting | null>(null);
  filterType = input<'all' | 'today' | 'week' | 'my'>('all');
  searchQuery = input<string>('');

  meetings: Meeting[] = [];

  constructor(private meetingsService: MeetingsService) {}

  ngOnInit(): void {
    this.meetings = this.meetingsService.getAllMeetings();
  }

  // Computed property to filter meetings
  filteredMeetings = computed(() => {
    let filtered = this.meetings;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Apply date filter
    switch (this.filterType()) {
      case 'today':
        filtered = filtered.filter(meeting => {
          const meetingDate = new Date(meeting.dateDebut);
          meetingDate.setHours(0, 0, 0, 0);
          return meetingDate.getTime() === today.getTime();
        });
        break;
      
      case 'week':
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        filtered = filtered.filter(meeting => {
          const meetingDate = new Date(meeting.dateDebut);
          return meetingDate >= today && meetingDate <= nextWeek;
        });
        break;
      
      case 'my':
        // For now, show all meetings. You can add logic to filter by user
        filtered = filtered;
        break;
    }

    // Apply search filter
    const query = this.searchQuery().toLowerCase();
    if (query) {
      filtered = filtered.filter(meeting => 
        meeting.titre.toLowerCase().includes(query)
      );
    }

    return filtered;
  });


  selectMeeting(meeting: Meeting) {
    this.onMeetingSelect.emit(meeting);
  }

  isSelected(meeting: Meeting): boolean {
    return this.selectedMeeting() === meeting;
  }
}