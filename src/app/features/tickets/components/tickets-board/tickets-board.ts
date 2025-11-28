import { Component, input, output } from '@angular/core';
import { TicketCard } from '../ticket-card/ticket-card';
import { Ticket } from '../../models/ticket.model';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tickets-board',
  imports: [TicketCard, DragDropModule],
  templateUrl: './tickets-board.html',
  styleUrl: './tickets-board.css',
})
export class TicketsBoard {
  tickets = input.required<Ticket[]>();
  ticketMoved = output<{ ticket: Ticket; newStatus: string }>();

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

  onDrop(event: CdkDragDrop<Ticket[]>, newStatus: string) {
    // Get the dragged ticket
    const ticket = event.item.data as Ticket;

    // Emit event to parent to update ticket status
    this.ticketMoved.emit({ ticket, newStatus });
  }
}
