import { Component } from '@angular/core';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {NavbarComponent} from '../../shared/navbar/navbar';

@Component({
  selector: 'app-meetings',
  imports: [
    Sidebar,
    NavbarComponent
  ],
  templateUrl: './meetings.html',
  styleUrl: './meetings.css',
})
export class Meetings {

}
