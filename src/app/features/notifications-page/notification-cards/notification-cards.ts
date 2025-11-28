import { Component, Output, EventEmitter, OnInit, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CalendarDays, CheckSquare, MessageCircle, Calendar, ListTodo, Bell } from 'lucide-angular';
import {
  Notification,
  NotificationType,
  NotificationStatus,
  TagColor,
  NotificationPriority
} from '../Models/Notifications.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification-cards',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './notification-cards.html',
  styleUrls: ['./notification-cards.css']
})
export class NotificationCards implements OnInit {
  @Output() notificationClick = new EventEmitter<Notification>();
  @Output() actionClick = new EventEmitter<Notification>();
  @Input() notifications: Notification[] = [];
  @Input() selectedNotificationId: string | null = null;
  @ViewChild(NotificationCards) notificationCards!: NotificationCards;
  selectedNotif: Notification | null = null;
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe(notifications => {
      
      this.notifications = notifications;
      
    });
  }

  // Sample data - replace with real data later
  defaultNotifications: Notification[] = [
    {
      id: '1',
      type: NotificationType.MEETING,
      title: 'Meeting starting in 15 minutes: Sprint 18 planning',
      description: 'You are invited to the planning session for Sprint 18 in Calendar.',
      date: new Date(),
      formattedDate: '10:45',
      status: NotificationStatus.UNREAD,
      priority: NotificationPriority.HIGH,

      action: { text: 'Open in Calendar' }
    },
    {
      id: '2',
      type: NotificationType.TASK,
      title: 'Task assigned: Implement auth flows',
      description: 'Alex Chen assigned you a task in the Nova Platform backlog.',
      date: new Date(),
      formattedDate: '09:32',
      status: NotificationStatus.UNREAD,
      priority: NotificationPriority.MEDIUM,

      action: { text: 'View task details' }
    },
    {
      id: '3',
      type: NotificationType.MENTION,
      title: 'You were mentioned in a comment',
      description: 'Maria: "@you can you confirm the final copy for the onboarding email?"',
      date: new Date(),
      formattedDate: '08:10',
      status: NotificationStatus.UNREAD,
      priority: NotificationPriority.MEDIUM,

      action: { text: 'Open discussion' }
    },
    {
      id: '4',
      type: NotificationType.MENTION,
      title: 'You were mentioned in a comment',
      description: 'John: "@you can you review the latest design mockups?"',
      date: new Date(),
      formattedDate: '07:45',
      status: NotificationStatus.READ,
      priority: NotificationPriority.MEDIUM,

      action: { text: 'Open discussion' }
    },
    {
      id: '5',
      type: NotificationType.TASK,
      title: 'Task completed: API documentation',
      description: 'Sarah marked the task as complete.',
      date: new Date(),
      formattedDate: '06:30',
      status: NotificationStatus.READ,
      priority: NotificationPriority.LOW,

      action: { text: 'View task' }
    }
  ];

  readonly icons = { CalendarDays, CheckSquare, MessageCircle, Calendar, ListTodo, Bell };

  getIcon(type: NotificationType) {
    const iconMap = {
      [NotificationType.MEETING]: this.icons.CalendarDays,
      [NotificationType.TASK]: this.icons.CheckSquare,
      [NotificationType.MENTION]: this.icons.MessageCircle,
      [NotificationType.EVENT]: this.icons.Calendar,
      [NotificationType.STATUS]: this.icons.ListTodo,
      [NotificationType.SNOOZED]: this.icons.Bell,
      [NotificationType.ASSIGNMENT]: this.icons.CheckSquare,
      [NotificationType.COMMENT]: this.icons.MessageCircle
    };
    return iconMap[type] || this.icons.Bell;
  }

  isUnread(notification: Notification): boolean {
    return notification.status === NotificationStatus.UNREAD;
  }

  getTagColorClasses(color: TagColor): string {
    const colorMap = {
      [TagColor.BLUE]: 'bg-blue-900 text-blue-300',
      [TagColor.GREEN]: 'bg-green-900 text-green-300',
      [TagColor.PURPLE]: 'bg-purple-900 text-purple-300',
      [TagColor.ORANGE]: 'bg-orange-900 text-orange-300',
      [TagColor.GRAY]: 'bg-gray-700 text-gray-300',
      [TagColor.RED]: 'bg-red-900 text-red-300',
      [TagColor.YELLOW]: 'bg-yellow-900 text-yellow-300'
    };
    return colorMap[color];
  }

  getTimeSection(notification: Notification): string {
    const now = new Date();
    const notifDate = new Date(notification.date);
    const diffDays = Math.floor((now.getTime() - notifDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays <= 7) return 'This week';
    return 'Earlier';
  }

  shouldShowSection(index: number): boolean {
    if (index === 0) return true;

    const currentSection = this.getTimeSection(this.notifications[index]);
    const previousSection = this.getTimeSection(this.notifications[index - 1]);

    return currentSection !== previousSection;
  }

  formatDate(date: Date): string {
    const now = new Date();
    const notifDate = new Date(date);
    const diffMs = now.getTime() - notifDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Same day - show time
    if (diffDays === 0) {
      return notifDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    }

    // This week - show day
    if (diffDays <= 7) {
      return notifDate.toLocaleDateString('en-US', { weekday: 'short' });
    }

    // Older
    return notifDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  onNotificationClick(notification: Notification): void {
    this.selectedNotificationId = notification.id;
    this.notificationClick.emit(notification);
  }

  isSelected(notification: Notification): boolean {
    return this.selectedNotificationId === notification.id;
  }

  onActionClick(notification: Notification, event: Event): void {
    event.stopPropagation();
    this.actionClick.emit(notification);
    this.selectedNotif = notification;
  }

  clearSelection() {
    this.selectedNotificationId = null;
  }

  onDetailClose() {
    this.selectedNotif = null;
    this.clearSelection();
  }
}
