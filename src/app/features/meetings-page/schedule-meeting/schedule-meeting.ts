import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { Meeting } from '../models/meetings.model';

@Component({
  selector: 'app-schedule-meeting-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './schedule-meeting.html',
  styleUrl: './schedule-meeting.css',
})
export class ScheduleMeetingModalComponent {
  onClose = output<void>();
  onSave = output<Meeting>();

  meeting: Meeting = {
    titre: '',
    dateDebut: '',
    heureDebut: '',
    heureFin: '',
    Participants: []
  };

  participantUrl: string = '';

  close() {
    this.onClose.emit();
  }

  addParticipant() {
    if (this.participantUrl.trim()) {
      this.meeting.Participants.push(this.participantUrl.trim());
      this.participantUrl = '';
    }
  }

  removeParticipant(index: number) {
    this.meeting.Participants.splice(index, 1);
  }

  save() {
    if (this.meeting.titre && this.meeting.dateDebut && this.meeting.heureDebut && this.meeting.heureFin) {
      this.onSave.emit({ ...this.meeting });
      this.close();
    }
  }
}