import { Component, signal} from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import {Overview} from './overview/overview';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {MeetingsComponent} from './meetings/meetings';
import {RecentDiscussionsComponent} from './recent-disscussions/recent-disscussions';
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
  tickets = signal<Ticket[]>([
    { id: '1', title: 'Setup staging environment', status: 'todo', priority: 'Medium', assignees: ['https://i.pravatar.cc/150?img=1'] },
    { id: '2', title: 'API rate limiting', status: 'doing', priority: 'High', assignees: ['https://i.pravatar.cc/150?img=3'] },
    { id: '3', title: 'Design onboarding flow', status: 'todo', priority: 'High', assignees: ['https://i.pravatar.cc/150?img=4'] },
    { id: '4', title: 'Integrate SSO', status: 'done', priority: 'Low', assignees: ['https://i.pravatar.cc/150?img=1'] },
    { id: '5', title: 'Refactor orders module', status: 'happyday', priority: 'Medium', assignees: ['https://i.pravatar.cc/150?img=7'] },
  ]);
  protected filteredTickets() {
    return [];
  }
}
