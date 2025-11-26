import { Component, output, model } from '@angular/core';

@Component({
  selector: 'app-tickets-toolbar',
  imports: [],
  templateUrl: './tickets-toolbar.html',
  styleUrl: './tickets-toolbar.css',
})
export class TicketsToolbar {
  searchQuery = model<string>('');

  // Events
  filterClicked = output<void>();
  sortClicked = output<void>();
  assigneeClicked = output<void>();
  priorityClicked = output<void>();
  newTicketClicked = output<void>();

}
