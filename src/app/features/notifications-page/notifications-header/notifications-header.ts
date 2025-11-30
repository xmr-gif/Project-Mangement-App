import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule} from 'lucide-angular';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-notifications-header',
  standalone: true,
  imports: [
    FormsModule,
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './notifications-header.html',
  styleUrl: './notifications-header.css',
})
export class NotificationsHeader {
  @Output() filterChange = new EventEmitter<'All' | 'Mentions' | 'Tasks' | 'Meetings'>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() markAllAsRead = new EventEmitter<void>();

  activeFilter: 'All' | 'Mentions' | 'Tasks' | 'Meetings' = 'All';
  searchQuery: string = '';

  setFilter(filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings') {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.searchChange.emit(query);
  }

  onMarkAllAsRead() {
    this.markAllAsRead.emit();
  }
}
