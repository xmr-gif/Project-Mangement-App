import { Component } from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import {Overview} from './overview/overview';
import {NavbarComponent} from '../../shared/navbar/navbar';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar,
    TicketsBoard,
    Overview,
    NavbarComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
