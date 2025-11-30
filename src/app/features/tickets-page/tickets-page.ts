import { Component, signal, computed } from '@angular/core';
import { TicketsBoard } from '../tickets/components/tickets-board/tickets-board';
import { TicketsToolbar } from './tickets-toolbar/tickets-toolbar';
import { NewTicketModal, NewTicketData } from './new-ticket-modal/new-ticket-modal';
import { Ticket } from '../tickets/models/ticket.model';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-tickets-page',
  imports: [TicketsBoard, TicketsToolbar, NewTicketModal, NavbarComponent, Sidebar],
  templateUrl: './tickets-page.html',
  styleUrl: './tickets-page.css',
})
export class TicketsPage {
  searchQuery = signal('');
  showModal = signal(false);
  selectedPriority = signal('All');
  selectedAssigneeId = signal('1'); // '1' = 'Any'

  // Map assignee IDs to avatar URLs
  assigneeAvatarMap: { [key: string]: string } = {
    '2': 'https://i.pravatar.cc/150?img=1', // John Doe
    '3': 'https://i.pravatar.cc/150?img=2', // Jane Smith
    '4': 'https://i.pravatar.cc/150?img=3', // Mike Johnson
    '5': 'https://i.pravatar.cc/150?img=4'  // Sarah Williams
  };

  allTickets = signal<Ticket[]>([
    {
      id: '1',
      title: 'Setup staging environment',
      status: 'todo',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] // John + Jane
    },
    {
      id: '2',
      title: 'API rate limiting',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=3'] // Mike
    },
    {
      id: '3',
      title: 'Design onboarding flow',
      status: 'todo',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=4'] // Sarah
    },
    {
      id: '4',
      title: 'Integrate SSO',
      status: 'done',
      priority: 'Low',
      assignees: ['https://i.pravatar.cc/150?img=1'] // John
    },
    {
      id: '5',
      title: 'Release v1.2.0',
      status: 'done',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=2'] // Jane
    },
    {
      id: '6',
      title: 'Refactor auth module',
      status: 'doing',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=3'] // Mike
    },
    {
      id: '7',
      title: 'Refactor orders module',
      status: 'happyday',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=4'] // Sarah
    }
  ]);

  filteredTickets = computed(() => {
    let tickets = this.allTickets();

    // Filter by search query
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      tickets = tickets.filter(ticket =>
        ticket.title.toLowerCase().includes(query)
      );
    }

    // Filter by priority
    const priority = this.selectedPriority();
    if (priority !== 'All') {
      tickets = tickets.filter(ticket => ticket.priority === priority);
    }

    // Filter by assignee
    const assigneeId = this.selectedAssigneeId();
    if (assigneeId !== '1') { // '1' = 'Any'
      const assigneeAvatar = this.assigneeAvatarMap[assigneeId];
      tickets = tickets.filter(ticket =>
        ticket.assignees.includes(assigneeAvatar)
      );
    }

    return tickets;
  });

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
    this.showModal.set(true);
  }

  onCloseModal() {
    this.showModal.set(false);
  }

  onCreateTicket(data: NewTicketData) {
    // Convert assignee IDs to avatar URLs
    const assigneeAvatars = data.assignees.map(id => this.assigneeAvatarMap[id]);

    const newTicket: Ticket = {
      id: Date.now().toString(),
      title: data.title,
      status: 'todo',
      priority: data.priority,
      assignees: assigneeAvatars
    };

    this.allTickets.update(tickets => [...tickets, newTicket]);
    this.showModal.set(false);
    console.log('✅ New ticket created:', newTicket);
  }

  onPriorityChanged(priority: string) {
    this.selectedPriority.set(priority);
    console.log('Priority filter:', priority);
  }

  onAssigneeChanged(assigneeId: string) {
    this.selectedAssigneeId.set(assigneeId);
    console.log('Assignee filter:', assigneeId, 'Avatar:', this.assigneeAvatarMap[assigneeId]);
  }
}
