import { Component } from '@angular/core';
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
  meetings: Meeting[] = [
    { titre: 'Sprint Planning', dateDebut: '2025-11-25', heureDebut: '10:00', heureFin: '11:30' },
    { titre: 'Client Review', dateDebut: '2025-11-27', heureDebut: '14:00', heureFin: '15:00' },
    { titre: 'Team Standup', dateDebut: '2025-11-28', heureDebut: '09:00', heureFin: '09:30' },
    { titre: 'Design Sync', dateDebut: '2025-11-29', heureDebut: '13:00', heureFin: '14:00' },
    { titre: 'Product Demo', dateDebut: '2025-11-30', heureDebut: '16:00', heureFin: '17:00' }
  ];
}