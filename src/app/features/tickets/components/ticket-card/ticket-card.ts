import { Component, input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {
  ticket = input.required<Ticket>();
}
