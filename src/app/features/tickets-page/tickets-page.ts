import { Component, signal, computed } from '@angular/core';
import { TicketsBoard } from '../tickets/components/tickets-board/tickets-board';
import { TicketsToolbar } from '../tickets-page/tickets-toolbar/tickets-toolbar';
import { Ticket } from '../tickets/models/ticket.model';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tickets-page',
  imports: [TicketsBoard, TicketsToolbar, NavbarComponent, Sidebar],
  templateUrl: './tickets-page.html',
  styleUrl: './tickets-page.css',
})
export class TicketsPage {
  searchQuery = signal('');

  allTickets = signal<Ticket[]>([
    {
      id: '1',
      title: 'Setup staging environment',
      status: 'todo',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2']
    },
    {
      id: '2',
      title: 'API rate limiting',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=3']
    },
    {
      id: '3',
      title: 'Design onboarding flow',
      status: 'todo',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=4']
    },
    {
      id: '4',
      title: 'Integrate SSO',
      status: 'done',
      priority: 'Low',
      assignees: ['https://i.pravatar.cc/150?img=1']
    },
    {
      id: '5',
      title: 'Release v1.2.0',
      status: 'done',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=6']
    },
    {
      id: '6',
      title: 'Refactor auth module',
      status: 'doing',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    },
    {
      id: '7',
      title: 'Refactor orders module',
      status: 'happyday',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=8']
    }
  ]);

  filteredTickets = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.allTickets();

    return this.allTickets().filter(ticket =>
      ticket.title.toLowerCase().includes(query)
    );
  });

  // Handle ticket moved between columns
  onTicketMoved(event: { ticket: Ticket; newStatus: string }) {
    this.allTickets.update(tickets =>
      tickets.map(t =>
        t.id === event.ticket.id
          ? { ...t, status: event.newStatus }
          : t
      )
    );
    console.log(`✅ Ticket "${event.ticket.title}" moved to ${event.newStatus}`);
  }

  onNewTicket() {
    console.log('Create new ticket');
  }

  onFilter() {
    console.log('Filter clicked');
  }

  onSort() {
    console.log('Sort clicked');
  }

  onAssignee() {
    console.log('Assignee filter clicked');
  }

  onPriority() {
    console.log('Priority filter clicked');
  }
}
