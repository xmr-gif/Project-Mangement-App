import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Notification, TagColor } from '../Models/Notifications.model';

@Component({
  selector: 'app-notification-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './notification-detail.html',
  styleUrl: './notification-detail.css',
})
export class NotificationDetail {
  notification = input.required<Notification>();
  onClose = output<void>();
  onMarkAsRead = output<Notification>();

  close() {
    this.onClose.emit();
  }

  markAsRead() {
    this.onMarkAsRead.emit(this.notification());
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
}
