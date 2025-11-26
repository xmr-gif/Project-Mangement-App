import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule} from 'lucide-angular';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-notifications-header',
  imports: [
    FormsModule,
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './notifications-header.html',
  styleUrl: './notifications-header.css',
})
export class NotificationsHeader {
  activeFilter: 'All' | 'Mentions' | 'Tasks' | 'Meetings' = 'All';
  searchQuery: string = '';

  setFilter(filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings') {
    this.activeFilter = filter;
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
  }
}
