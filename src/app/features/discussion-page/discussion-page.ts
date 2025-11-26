import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { DiscussionPageHeader } from '../discussion-page-header/discussion-page-header';

@Component({
  selector: 'app-discussion-page',
  standalone: true,
  imports: [
    Sidebar,
    NavbarComponent,
    DiscussionPageHeader
  ],
  templateUrl: './discussion-page.html',
  styleUrls: ['./discussion-page.css'],

  
})
export class DiscussionPage {
}