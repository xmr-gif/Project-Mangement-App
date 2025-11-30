import { Component, signal, computed } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { TicketsBoard } from '../tickets/components/tickets-board/tickets-board';
import { Overview } from './overview/overview';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { MeetingsComponent } from './meetings/meetings';
import { RecentDiscussionsComponent } from './recent-disscussions/recent-disscussions';
import { Ticket } from '../tickets/models/ticket.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar,
    TicketsBoard,
    Overview,
    NavbarComponent,
    MeetingsComponent,
    RecentDiscussionsComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Current logged-in user
  currentUser = signal({
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?img=2'
  });

  // All tickets - USING SIGNAL (not readonly array)
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
      assignees: ['https://i.pravatar.cc/150?img=2']
    },
    {
      id: '6',
      title: 'Refactor orders module',
      status: 'happyday',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    },
    {
      id: '7',
      title: 'Update documentation',
      status: 'todo',
      priority: 'Low',
      assignees: ['https://i.pravatar.cc/150?img=2']
    },
    {
      id: '8',
      title: 'Fix login bug',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=2']
    }
  ]);

  // Filter tickets for current user
  filteredTickets = computed(() => {
    const currentUserAvatar = this.currentUser().avatar;
    return this.allTickets().filter(ticket =>
      ticket.assignees.includes(currentUserAvatar)
    );
  });

  // HANDLE TICKET MOVED - THIS IS KEY FOR DRAG-DROP TO WORK
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
}
