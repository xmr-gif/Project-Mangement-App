import { Component, input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {
  // Option 1: Make it required (recommended)
  ticket = input.required<Ticket>();

  // Option 2: Keep optional (current way works with @if check)
  // ticket = input<Ticket>();
}
