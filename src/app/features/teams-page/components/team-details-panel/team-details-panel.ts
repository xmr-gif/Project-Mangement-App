import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-details-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-details-panel.html',
  styleUrl: './team-details-panel.css'
})
export class TeamDetailsPanel {
  @Input() team!: Team;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}