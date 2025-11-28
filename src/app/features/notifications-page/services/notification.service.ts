import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Notification,
  NotificationType,
  NotificationStatus,
  TagColor,
  NotificationPriority
} from '../Models/Notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly STORAGE_KEY = 'notifications';
  private notificationsSubject: BehaviorSubject<Notification[]>;
  public notifications$: Observable<Notification[]>;

  constructor() {
    const savedNotifications = this.loadFromLocalStorage();
    this.notificationsSubject = new BehaviorSubject<Notification[]>(
      savedNotifications.length > 0 ? savedNotifications : this.getInitialNotifications()
    );
    this.notifications$ = this.notificationsSubject.asObservable();
  }

  private getInitialNotifications(): Notification[] {
    return [
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
  }

  getNotifications(): Notification[] {
    return this.notificationsSubject.value;
  }

  getFilteredNotifications(filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings'): Notification[] {
    const notifications = this.getNotifications();

    if (filter === 'All') {
      return notifications;
    }

    return notifications.filter(notif => {
      switch (filter) {
        case 'Mentions':
          return notif.type === NotificationType.MENTION;
        case 'Tasks':
          return notif.type === NotificationType.TASK || notif.type === NotificationType.ASSIGNMENT;
        case 'Meetings':
          return notif.type === NotificationType.MEETING || notif.type === NotificationType.EVENT;
        default:
          return true;
      }
    });
  }

  getSearchedNotifications(query: string): Notification[] {
    if (!query.trim()) {
      return this.getNotifications();
    }

    const lowerQuery = query.toLowerCase();
    return this.getNotifications().filter(notif =>
      notif.title.toLowerCase().includes(lowerQuery) ||
      (notif.description && notif.description.toLowerCase().includes(lowerQuery))
    );
  }

  getFilteredAndSearchedNotifications(
    filter: 'All' | 'Mentions' | 'Tasks' | 'Meetings',
    searchQuery: string
  ): Notification[] {
    let notifications = this.getFilteredNotifications(filter);

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      notifications = notifications.filter(notif =>
        notif.title.toLowerCase().includes(lowerQuery) ||
        (notif.description && notif.description.toLowerCase().includes(lowerQuery))
      );
    }

    return notifications;
  }

  updateNotificationStatus(notificationId: string, status: NotificationStatus): void {
    const notifications = this.getNotifications();
    const notification = notifications.find(n => n.id === notificationId);

    if (notification) {
      notification.status = status;
      this.saveToLocalStorage(notifications);
      this.notificationsSubject.next([...notifications]);
    }
  }

  markAllAsRead(): void {
    const notifications = this.getNotifications();
    notifications.forEach(n => {
      n.status = NotificationStatus.READ;
    });
    this.saveToLocalStorage(notifications);
    this.notificationsSubject.next([...notifications]);
  }

  private saveToLocalStorage(notifications: Notification[]): void {
    const serialized = notifications.map(n => ({
      ...n,
      date: n.date instanceof Date ? n.date.toISOString() : n.date
    }));
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(serialized));
  }

  private loadFromLocalStorage(): Notification[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      return [];
    }

    try {
      const parsed = JSON.parse(stored);
      return parsed.map((n: any) => ({
        ...n,
        date: new Date(n.date)
      }));
    } catch (e) {
      console.error('Error parsing notifications from localStorage:', e);
      return [];
    }
  }
}
