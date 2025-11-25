import { Component } from '@angular/core';
import {MeetingsComponent} from '../dashboard/meetings/meetings';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Overview} from '../dashboard/overview/overview';
import {RecentDiscussionsComponent} from '../dashboard/recent-disscussions/recent-disscussions';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';

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

}
