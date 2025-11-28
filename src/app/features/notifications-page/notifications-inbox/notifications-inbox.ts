import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NotificationCards } from '../notification-cards/notification-cards';
import { CommonModule } from '@angular/common';
import { Notification } from '../Models/Notifications.model';


@Component({
  selector: 'app-notifications-inbox',
  standalone: true,
  imports: [
    LucideAngularModule,
    NotificationCards,
    CommonModule,
  ],
  templateUrl: './notifications-inbox.html',
  styleUrls: ['./notifications-inbox.css'],
})
export class NotificationsInbox {
  @Output() notificationSelected = new EventEmitter<Notification>();
  @Input() notifications: Notification[] = [];
  @Input() selectedNotificationId: string | null = null;
  @ViewChild(NotificationCards) notificationCards!: NotificationCards;
  selectedNotif: Notification | null = null;
  activeFilter: 'All' | 'Mentions' | 'Tasks' | 'Meetings' = 'All';

  onFilterButtonClick() {
    console.log('Filter button clicked');
    // Toggle filter panel or drawer
  }

  onNotificationClick(notification: Notification) {
    this.notificationSelected.emit(notification);
    this.selectedNotif = notification;
  }
  onDetailClose() {
  this.selectedNotif = null;
  this.notificationCards.clearSelection();  // 🟦 remove highlight
}
}
