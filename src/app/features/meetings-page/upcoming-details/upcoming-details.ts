import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Meeting } from '../models/meetings.model';
@Component({
  selector: 'app-upcoming-details',
  standalone: true,
    imports: [CommonModule, LucideAngularModule],
  templateUrl: './upcoming-details.html',
  styleUrl: './upcoming-details.css',
})
export class UpcomingDetails {
 meeting = input.required<Meeting>();
  onClose = output<void>();

  close() {
    this.onClose.emit();
  }
}
