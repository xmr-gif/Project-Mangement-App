import { Component, signal, computed} from '@angular/core';
import {MeetingsComponent} from '../dashboard/meetings/meetings';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Overview} from '../dashboard/overview/overview';
import {RecentDiscussionsComponent} from '../dashboard/recent-disscussions/recent-disscussions';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import {Ticket} from './models/ticket.model'


@Component({
  selector: 'app-tickets',
  imports: [
    MeetingsComponent,
    NavbarComponent,
    Overview,
    RecentDiscussionsComponent,
    Sidebar,
    TicketsBoard
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  searchQuery = signal('');

  // ✅ This is what's missing - the tickets data
  allTickets = signal<Ticket[]>([
    {
      id: '1',
      title: 'Setup staging environment',
      status: 'todo',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=1']
    },
    {
      id: '2',
      title: 'API rate limiting',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=2']
    },
    {
      id: '3',
      title: 'Release v1.2.0',
      status: 'done',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=3']
    }
  ]);

  // ✅ Filtered tickets based on search
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
