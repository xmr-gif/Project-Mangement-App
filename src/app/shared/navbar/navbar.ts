import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface Notification {
  id: string;
  title: string;
  description?: string;
  type: 'mention' | 'task' | 'meeting';
  date: Date;
  read: boolean;
}

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,
    LucideAngularModule
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  
  isProjectDropdownOpen = false;
  isProfileDropdownOpen = false;
  isNotificationsPopupOpen = false;
  hasNotifications = true;
  notifications: Notification[] = [];

  projects = [
    { id: 1, name: 'TGO5' },
    { id: 2, name: 'Symfony' },
    { id: 3, name: '7douti' },
    { id: 4, name: 'Mani' }
  ];

  selectedProject = this.projects[0];

  ngOnInit(): void {
    // Initialize with some sample notifications
    this.notifications = [
      {
        id: '1',
        title: 'John mentioned you',
        description: 'in Sprint Planning meeting',
        type: 'mention',
        date: new Date(),
        read: false
      },
      {
        id: '2',
        title: 'New task assigned',
        description: 'Design system components',
        type: 'task',
        date: new Date(Date.now() - 3600000),
        read: false
      },
      {
        id: '3',
        title: 'Meeting reminder',
        description: 'Team standup in 30 minutes',
        type: 'meeting',
        date: new Date(Date.now() - 7200000),
        read: true
      }
    ];
  }

  toggleProjectDropdown() {
    this.isProjectDropdownOpen = !this.isProjectDropdownOpen;
    if (this.isProjectDropdownOpen) {
      this.isProfileDropdownOpen = false;
      this.isNotificationsPopupOpen = false;
    }
  }

  isAppsDropdownOpen = false;

toggleAppsDropdown() {
  this.isAppsDropdownOpen = !this.isAppsDropdownOpen;
  this.isProjectDropdownOpen = false;
  this.isProfileDropdownOpen = false;
  this.isNotificationsPopupOpen = false;
}


  toggleProfileDropdown() {
    this.isAppsDropdownOpen = false;
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    if (this.isProfileDropdownOpen) {
      this.isProjectDropdownOpen = false;
      this.isNotificationsPopupOpen = false;
    }
  }

  toggleNotificationsPopup() {
    this.isNotificationsPopupOpen = !this.isNotificationsPopupOpen;
    this.isProjectDropdownOpen = false;
    this.isProfileDropdownOpen = false;
    this.isAppsDropdownOpen = false;
  }

  selectProject(project: any) {
    this.selectedProject = project;
    this.isProjectDropdownOpen = false;
  }
  closeDropdowns() {
    this.isProjectDropdownOpen = false;
    this.isProfileDropdownOpen = false;
    this.isAppsDropdownOpen = false;
    this.isNotificationsPopupOpen = false;
  }

  getNotificationIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'mention': 'MessageCircle',
      'task': 'CheckSquare',
      'meeting': 'Calendar'
    };
    return iconMap[type] || 'Bell';
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  }

  viewAllNotifications(): void {
    this.router.navigate(['/notifications']);
    this.isNotificationsPopupOpen = false;
  }

}

