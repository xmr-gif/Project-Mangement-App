import { Component, input, output } from '@angular/core';
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

  meetings: Meeting[] = [
    { titre: 'Sprint Planning', dateDebut: '2025-11-25', heureDebut: '10:00', heureFin: '11:30' },
    { titre: 'Client Review', dateDebut: '2025-11-27', heureDebut: '14:00', heureFin: '15:00' },
    { titre: 'Team Standup', dateDebut: '2025-11-28', heureDebut: '09:00', heureFin: '09:30' },
    { titre: 'Design Sync', dateDebut: '2025-11-29', heureDebut: '13:00', heureFin: '14:00' },
    { titre: 'Product Demo', dateDebut: '2025-11-30', heureDebut: '16:00', heureFin: '17:00' },
    { titre: 'Retrospective', dateDebut: '2025-12-01', heureDebut: '15:00', heureFin: '16:00' },
    { titre: 'Planning Meeting', dateDebut: '2025-12-02', heureDebut: '11:00', heureFin: '12:00' },
    { titre: 'Code Review', dateDebut: '2025-12-03', heureDebut: '14:30', heureFin: '15:30' },
  ];

  selectMeeting(meeting: Meeting) {
    this.onMeetingSelect.emit(meeting);
  }

  isSelected(meeting: Meeting): boolean {
    return this.selectedMeeting() === meeting;
  }
}