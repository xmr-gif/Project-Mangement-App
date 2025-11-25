import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";
import { Meeting } from '../models/meetings.model';

@Component({
  selector: 'app-upcoming-meetings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './upcoming-meetings.html',
  styleUrl: './upcoming-meetings.css',
})
export class UpcomingMeetings {
  // Event emitter to send selected meeting to parent
  onMeetingSelect = output<Meeting>();
  
  // Receive selected meeting from parent
  selectedMeeting = input<Meeting | null>(null);
  filterType = input<'all' | 'today' | 'week' | 'my'>('all');
  searchQuery = input<string>('');

  meetings: Meeting[] = [
    { titre: 'Sprint Planning', dateDebut: '2025-11-25', heureDebut: '10:00', heureFin: '11:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2']

     },
    { titre: 'Client Review', dateDebut: '2025-11-27', heureDebut: '14:00', heureFin: '15:00' ,
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2']
    },
    { titre: 'Team Standup', dateDebut: '2025-11-28', heureDebut: '09:00', heureFin: '09:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Design Sync', dateDebut: '2025-11-29', heureDebut: '13:00', heureFin: '14:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Product Demo', dateDebut: '2025-11-30', heureDebut: '16:00', heureFin: '17:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Retrospective', dateDebut: '2025-12-01', heureDebut: '15:00', heureFin: '16:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Planning Meeting', dateDebut: '2025-12-02', heureDebut: '11:00', heureFin: '12:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Code Review', dateDebut: '2025-12-03', heureDebut: '14:30', heureFin: '15:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'], },
  ];
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