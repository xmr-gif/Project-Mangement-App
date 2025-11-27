import { Component, input } from '@angular/core';
import { TicketCard } from '../ticket-card/ticket-card';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-tickets-board',
  imports: [TicketCard],
  templateUrl: './tickets-board.html',
  styleUrl: './tickets-board.css',
})
export class TicketsBoard {
  tickets = input.required<Ticket[]>();

  todoTickets() {
    return this.tickets().filter(t => t.status === 'todo');
  }

  doingTickets() {
    return this.tickets().filter(t => t.status === 'doing');
  }

  doneTickets() {
    return this.tickets().filter(t => t.status === 'done');
  }

  happydayTickets() {
    return this.tickets().filter(t => t.status === 'happyday');
  }
}
