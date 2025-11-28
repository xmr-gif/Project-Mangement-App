import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css'
})
export class TeamCard {
  @Input() team!: Team;
  @Input() isSelected = false;
  @Output() viewMembers = new EventEmitter<Team>();

  get visibleMembers() {
    return this.team.members.slice(0, 3);
  }

  get remainingCount() {
    return this.team.memberCount - 3;
  }

  onViewMembers() {
    this.viewMembers.emit(this.team);
  }

  // ← AJOUT : Formatage de la date
  formatDate(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'today';
    } else if (diffDays === 1) {
      return 'yesterday';
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks}w ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months}mo ago`;
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }
  }
}