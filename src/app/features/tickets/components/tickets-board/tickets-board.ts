// src/app/features/tickets/components/tickets-board/tickets-board.component.ts
import { Component, input } from '@angular/core';
import { TicketCard } from '../ticket-card/ticket-card';
import { Ticket } from '../../models/ticket.model';

interface Column {
  id: string;
  title: string;
  tickets: Ticket[];
}

@Component({
  selector: 'app-tickets-board',
  standalone: true,
  imports: [TicketCard],
  templateUrl: './tickets-board.html',
})
export class TicketsBoard {
  tickets = input.required<Ticket[]>();

  // Computed columns based on your status types
  get columns(): Column[] {
    const allTickets = this.tickets();

    return [
      {
        id: 'todo',
        title: 'To Do',
        tickets: allTickets.filter(t => t.status === 'todo')
      },
      {
        id: 'doing',
        title: 'Doing',
        tickets: allTickets.filter(t => t.status === 'doing')
      },
      {
        id: 'done',
        title: 'Done',
        tickets: allTickets.filter(t => t.status === 'done')
      },
      {
        id: 'happyday',
        title: 'HappyDay',
        tickets: allTickets.filter(t => t.status === 'happyday')
      }
    ];
  }
}
