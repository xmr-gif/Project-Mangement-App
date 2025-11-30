import { Component, output, signal, HostListener } from '@angular/core';

export interface NewTicketData {
  title: string;
  priority: string;
  startDate: string;
  endDate: string;
  assignees: string[];
}

@Component({
  selector: 'app-new-ticket-modal',
  standalone: true,
  templateUrl: './new-ticket-modal.html',
  styleUrl: './new-ticket-modal.css'
})
export class NewTicketModal {
  // Events
  closeModal = output<void>();
  createTicket = output<NewTicketData>();

  // Form data
  title = signal('');
  priority = signal('Medium');
  startDate = signal('');
  endDate = signal('');
  selectedAssignees = signal<string[]>([]);

  // Dropdown state
  showPriorityDropdown = signal(false);
  showAssigneeDropdown = signal(false);

  // Options
  priorities = ['High', 'Medium', 'Low'];

  // Mock assignees - Added "All" option
  assignees = [
    { id: 'all', name: 'All Members', avatar: '' },
    { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', name: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=4' }
  ];

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Check if click is outside priority dropdown
    if (!target.closest('.priority-dropdown')) {
      this.showPriorityDropdown.set(false);
    }

    // Check if click is outside assignee dropdown
    if (!target.closest('.assignee-dropdown')) {
      this.showAssigneeDropdown.set(false);
    }
  }

  togglePriorityDropdown(event: Event) {
    event.stopPropagation();
    this.showPriorityDropdown.update(v => !v);
    this.showAssigneeDropdown.set(false);
  }

  toggleAssigneeDropdown(event: Event) {
    event.stopPropagation();
    this.showAssigneeDropdown.update(v => !v);
    this.showPriorityDropdown.set(false);
  }

  selectPriority(priority: string, event: Event) {
    event.stopPropagation();
    this.priority.set(priority);
    this.showPriorityDropdown.set(false);
  }

  toggleAssignee(assigneeId: string, event: Event) {
    event.stopPropagation();

    // If "All" is selected
    if (assigneeId === 'all') {
      // Check if all members are already selected
      const allMemberIds = this.assignees
        .filter(a => a.id !== 'all')
        .map(a => a.id);

      const allSelected = allMemberIds.every(id =>
        this.selectedAssignees().includes(id)
      );

      if (allSelected) {
        // Deselect all
        this.selectedAssignees.set([]);
      } else {
        // Select all
        this.selectedAssignees.set(allMemberIds);
      }
    } else {
      // Toggle individual assignee
      this.selectedAssignees.update(current => {
        if (current.includes(assigneeId)) {
          return current.filter(id => id !== assigneeId);
        } else {
          return [...current, assigneeId];
        }
      });
    }
  }

  isAssigneeSelected(assigneeId: string): boolean {
    if (assigneeId === 'all') {
      // Check if all members are selected
      const allMemberIds = this.assignees
        .filter(a => a.id !== 'all')
        .map(a => a.id);
      return allMemberIds.every(id => this.selectedAssignees().includes(id));
    }
    return this.selectedAssignees().includes(assigneeId);
  }

  getSelectedAssigneesText(): string {
    const count = this.selectedAssignees().length;
    if (count === 0) return 'Select assignees';

    // Check if all members are selected
    const allMemberIds = this.assignees
      .filter(a => a.id !== 'all')
      .map(a => a.id);

    if (count === allMemberIds.length) {
      return 'All Members';
    }

    return `${count} selected`;
  }

  onSubmit() {
    if (!this.title().trim()) {
      alert('Please enter a title');
      return;
    }

    const ticketData: NewTicketData = {
      title: this.title(),
      priority: this.priority(),
      startDate: this.startDate(),
      endDate: this.endDate(),
      assignees: this.selectedAssignees()
    };

    this.createTicket.emit(ticketData);
  }

  onClose() {
    this.closeModal.emit();
  }
}
