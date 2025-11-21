import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Sidebar} from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-meetings-page',
  imports: [
    NavbarComponent,
    Sidebar
  ],
  templateUrl: './meetings-page.html',
  styleUrl: './meetings-page.css',
})
export class MeetingsPage {

}
