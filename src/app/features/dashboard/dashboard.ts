import { Component } from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import {Overview} from './overview/overview';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {MeetingsComponent} from './meetings/meetings';
import {RecentDiscussionsComponent} from './recent-disscussions/recent-disscussions';



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
  protected filteredTickets() {
    return [];
  }
}
