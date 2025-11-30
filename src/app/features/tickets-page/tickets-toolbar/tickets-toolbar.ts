import { Component, output, model, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-tickets-toolbar',
  standalone: true,
  templateUrl: './tickets-toolbar.html',
  styleUrl: './tickets-toolbar.css'
})
export class TicketsToolbar {
  searchQuery = model<string>('');

  // Dropdown states
  showPriorityDropdown = signal(false);
  showAssigneeDropdown = signal(false);

  // Selected values
  selectedPriority = signal<string>('All');
  selectedAssignee = signal<string>('Any');

  // Events
  newTicketClicked = output<void>();
  priorityChanged = output<string>();
  assigneeChanged = output<string>();

  // Priority options
  priorities = ['All', 'High', 'Medium', 'Low'];

  // Mock assignees
  assignees = [
    { id: '1', name: 'Any', avatar: '' },
    { id: '2', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '3', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '4', name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '5', name: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=4' }
  ];

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.priority-dropdown-toolbar')) {
      this.showPriorityDropdown.set(false);
    }

    if (!target.closest('.assignee-dropdown-toolbar')) {
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
    this.selectedPriority.set(priority);
    this.showPriorityDropdown.set(false);
    this.priorityChanged.emit(priority);
  }

  selectAssignee(assignee: { id: string; name: string; avatar: string }, event: Event) {
    event.stopPropagation();
    this.selectedAssignee.set(assignee.name);
    this.showAssigneeDropdown.set(false);
    this.assigneeChanged.emit(assignee.id);
  }
}
