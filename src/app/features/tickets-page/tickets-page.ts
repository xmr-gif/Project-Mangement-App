import { Component, signal, computed  } from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import { Ticket } from '../tickets/models/ticket.model';
import {TicketsToolbar} from './tickets-toolbar/tickets-toolbar';


@Component({
  selector: 'app-tickets-page',
  imports: [
    Sidebar,
    TicketsBoard,
    TicketsToolbar
  ],
  templateUrl: './tickets-page.html',
  styleUrl: './tickets-page.css',
})
export class TicketsPage {
  searchQuery = signal('');

  // Mock data with your simpler model
  allTickets = signal<Ticket[]>([
    {
      id: '1',
      title: 'Setup staging environment',
      status: 'todo',
      priority: 'Medium',
      assignees: [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2'
      ]
    },
    {
      id: '2',
      title: 'Design onboarding flow',
      status: 'todo',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=3']
    },
    {
      id: '3',
      title: 'API rate limiting',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=4']
    },
    {
      id: '4',
      title: 'Refactor auth module',
      status: 'doing',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=5']
    },
    {
      id: '5',
      title: 'Integrate SSO',
      status: 'done',
      priority: 'Low',
      assignees: ['https://i.pravatar.cc/150?img=6']
    },
    {
      id: '6',
      title: 'Release v1.2.0',
      status: 'done',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    },
    {
      id: '7',
      title: 'Add SSO via SAML',
      status: 'happyday',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=8']
    }
  ]);

  // Filtered tickets based on search
  filteredTickets = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.allTickets();

    return this.allTickets().filter(ticket =>
      ticket.title.toLowerCase().includes(query)
    );
  });

  // Event handlers
  onNewTicket() {
    console.log('New ticket clicked');
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
