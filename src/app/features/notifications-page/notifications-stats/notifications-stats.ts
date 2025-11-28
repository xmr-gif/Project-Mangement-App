import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bell, MessageCircle, CheckSquare, Calendar } from 'lucide-angular';
import { Notification, NotificationType } from '../Models/Notifications.model';

interface StatItem {
  label: string;
  value: number;
  icon: any;
  color: string;
}

@Component({
  selector: 'app-notifications-stats',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './notifications-stats.html',
  styleUrl: './notifications-stats.css'
})
export class NotificationsStats implements OnInit {
  @Input() notifications: Notification[] = [];

  unreadToday: number = 0;
  mentionsCount: number = 0;
  typeStats: { [key: string]: number } = {};
  stats: StatItem[] = [];

  readonly icons = { Bell, MessageCircle, CheckSquare, Calendar };

  ngOnInit() {
    this.calculateStats();
  }

  ngOnChanges() {
    this.calculateStats();
  }

  calculateStats() {
    if (!this.notifications.length) {
      this.unreadToday = 0;
      this.mentionsCount = 0;
      this.typeStats = {};
      this.stats = [];
      return;
    }

    // Count unread notifications from today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.unreadToday = this.notifications.filter(n => {
      const notifDate = new Date(n.date);
      notifDate.setHours(0, 0, 0, 0);
      return n.status === 'unread' && notifDate.getTime() === today.getTime();
    }).length;

    // Count mentions
    this.mentionsCount = this.notifications.filter(n => n.type === NotificationType.MENTION).length;

    // Count by type
    this.typeStats = {};
    this.notifications.forEach(n => {
      this.typeStats[n.type] = (this.typeStats[n.type] || 0) + 1;
    });

    // Build stats array
    this.stats = [
      {
        label: 'Unread Today',
        value: this.unreadToday,
        icon: this.icons.Bell,
        color: 'bg-gray-800 text-gray-300'
      },
      {
        label: 'Mentions',
        value: this.mentionsCount,
        icon: this.icons.MessageCircle,
        color: 'bg-gray-800 text-gray-300'
      }
    ];

    // Add type stats
    if (this.typeStats[NotificationType.TASK]) {
      this.stats.push({
        label: 'Tasks',
        value: this.typeStats[NotificationType.TASK],
        icon: this.icons.CheckSquare,
        color: 'bg-gray-800 text-gray-300'
      });
    }

    if (this.typeStats[NotificationType.MEETING]) {
      this.stats.push({
        label: 'Meetings',
        value: this.typeStats[NotificationType.MEETING],
        icon: this.icons.Calendar,
        color: 'bg-gray-800 text-gray-300'
      });
    }
  }
}
