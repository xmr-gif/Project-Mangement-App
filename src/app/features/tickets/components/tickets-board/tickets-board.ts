import { Component, signal } from '@angular/core';
import { TicketCard } from '../ticket-card/ticket-card';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-tickets-board',
  imports: [TicketCard],
  templateUrl: './tickets-board.html',
  styleUrl: './tickets-board.css',
})
export class TicketsBoard {
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
      id: 'stringhere',
      title: 'Refactor orders module',
      status: 'happyday',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    },
    {
      id: '6',
      title: 'Refactor auth module',
      status: 'doing',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    }
  ]);

  todoTickets() {
    return this.allTickets().filter(t => t.status === 'todo');
  }

  doingTickets() {
    return this.allTickets().filter(t => t.status === 'doing');
  }

  doneTickets() {
    return this.allTickets().filter(t => t.status === 'done');
  }

  happydayTickets() {
    return this.allTickets().filter(t => t.status === 'happyday');
  }
}
