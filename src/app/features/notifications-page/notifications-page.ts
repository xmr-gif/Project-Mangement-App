import { Component, OnInit } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {NavbarComponent} from "../../shared/navbar/navbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Sidebar} from "../../shared/sidebar/sidebar";
import {NotificationsHeader} from './notifications-header/notifications-header';
import {NotificationsInbox} from './notifications-inbox/notifications-inbox';
import {NotificationDetail} from './notification-detail/notification-detail';
import { Notification, NotificationStatus } from './Models/Notifications.model';
import { CommonModule } from '@angular/common';
import { NotificationService } from './services/notification.service';

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
export class NotificationsPage implements OnInit {
  currentFilter: 'All' | 'Mentions' | 'Tasks' | 'Meetings' = 'All';
  searchQuery: string = '';
  selectedNotification: Notification | null = null;
  filteredNotifications: Notification[] = [];
  isDetailOpen = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.updateFilteredNotifications();
    this.notificationService.notifications$.subscribe(() => {
      this.updateFilteredNotifications();
    });
  }

  private updateFilteredNotifications() {
    this.filteredNotifications = this.notificationService.getFilteredAndSearchedNotifications(
      this.currentFilter,
      this.searchQuery
    );
  }

  onFilterChange(filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings') {
    this.currentFilter = filter;
    this.updateFilteredNotifications();
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.updateFilteredNotifications();
  }

  onMarkAllAsRead() {
    this.notificationService.markAllAsRead();
  }

  onNotificationSelected(notification: Notification) {
    this.selectedNotification = notification;
    this.isDetailOpen = true;
  }

  closeNotificationDetail() {
    this.isDetailOpen = false;
    this.selectedNotification = null;
  }

  onMarkNotificationAsRead(notification: Notification) {
    this.notificationService.updateNotificationStatus(notification.id, NotificationStatus.READ);
    this.closeNotificationDetail();
  }
}
