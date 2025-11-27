import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {NavbarComponent} from "../../shared/navbar/navbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Sidebar} from "../../shared/sidebar/sidebar";
import {NotificationsHeader} from './notifications-header/notifications-header';
import {NotificationsInbox} from './notifications-inbox/notifications-inbox';
import {NotificationDetail} from './notification-detail/notification-detail';
import { Notification, NotificationStatus } from './Models/Notifications.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    LucideAngularModule,
    NavbarComponent,
    ReactiveFormsModule,
    Sidebar,
    FormsModule,
    NotificationsHeader,
    NotificationsInbox,
    NotificationDetail,
    CommonModule,
  ],
  templateUrl: './notifications-page.html',
  styleUrl: './notifications-page.css',
})
export class NotificationsPage {
  currentFilter: 'All' | 'Mentions' | 'Tasks' | 'Meetings' = 'All';
  searchQuery: string = '';
  selectedNotification: Notification | null = null;

  onFilterChange(filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings') {
    this.currentFilter = filter;
    console.log('Filter changed to:', filter);
    // Apply filter logic here
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    console.log('Search query:', query);
    // Apply search logic here
  }

  onMarkAllAsRead() {
    console.log('Mark all as read clicked');
    // Mark all notifications as read
  }

  onNotificationSelected(notification: Notification) {
    this.selectedNotification = notification;
    console.log('Selected notification:', notification);
  }

  closeNotificationDetail() {
    this.selectedNotification = null;
  }

  onMarkNotificationAsRead(notification: Notification) {
    notification.status = NotificationStatus.READ;
    console.log('Marked as read:', notification);
    this.closeNotificationDetail();
  }
}
