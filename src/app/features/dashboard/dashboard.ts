import { Component } from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {TicketsBoard} from '../tickets/components/tickets-board/tickets-board';
import {Overview} from './overview/overview';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar,
    TicketsBoard,
    Overview
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
