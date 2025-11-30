import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../../models/team.model';

@Component({
  selector: 'app-members-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members-modal.html',
  styleUrl: './members-modal.css'
})
export class MembersModal {
  @Input() isOpen = false;
  @Input() teamName = '';
  @Input() members: Member[] = [];
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    // katssed lmodal ila wtina bra
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.onClose();
    }
  }
}
