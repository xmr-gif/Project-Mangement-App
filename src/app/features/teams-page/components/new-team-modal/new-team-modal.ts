import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-new-team-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-team-modal.html',
  styleUrl: './new-team-modal.css'
})
export class NewTeamModal {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() teamCreated = new EventEmitter<Partial<Team>>();

  teamName = '';
  memberCount = 2;  
  
  
  readonly MIN_MEMBERS = 2;
  readonly MAX_MEMBERS = 10;

  onClose() {
    this.teamName = '';
    this.memberCount = 2;
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.onClose();
    }
  }

  
  get isValidMemberCount(): boolean {
    return this.memberCount >= this.MIN_MEMBERS && this.memberCount <= this.MAX_MEMBERS;
  }

  
  get memberCountError(): string {
    if (this.memberCount < this.MIN_MEMBERS) {
      return `Minimum ${this.MIN_MEMBERS} members required`;
    }
    if (this.memberCount > this.MAX_MEMBERS) {
      return `Maximum ${this.MAX_MEMBERS} members allowed`;
    }
    return '';
  }

  
  onSubmit() {
    if (this.teamName.trim() && this.isValidMemberCount) {
      const newTeam: Partial<Team> = {
        id: Date.now().toString(),
        name: this.teamName,
        memberCount: this.memberCount,
         createdAt: new Date(),   
        members: this.generatePlaceholderMembers(this.memberCount)  
      };
      
      this.teamCreated.emit(newTeam);
      this.onClose();
    }
  }


  private generatePlaceholderMembers(count: number) {
    const members = [];
    for (let i = 0; i < count; i++) {
      members.push({
        id: `member-${Date.now()}-${i}`,
        name: `Member ${i + 1}`,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
      });
    }
    return members;
  }

  
  incrementMembers() {
    if (this.memberCount < this.MAX_MEMBERS) {
      this.memberCount++;
    }
  }

  decrementMembers() {
    if (this.memberCount > this.MIN_MEMBERS) {
      this.memberCount--;
    }
  }
}