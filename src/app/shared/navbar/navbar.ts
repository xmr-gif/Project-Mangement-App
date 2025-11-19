import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

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
export class NavbarComponent {
  isProjectDropdownOpen = false;
  isProfileDropdownOpen = false;
  hasNotifications = true;

  projects = [
    { id: 1, name: 'TGO5' },
    { id: 2, name: 'Symfony' },
    { id: 3, name: '7douti' },
    { id: 4, name: 'Mani' }
  ];

  selectedProject = this.projects[0];

  toggleProjectDropdown() {
    this.isProjectDropdownOpen = !this.isProjectDropdownOpen;
    if (this.isProjectDropdownOpen) {
      this.isProfileDropdownOpen = false;
    }
  }

  isAppsDropdownOpen = false;

toggleAppsDropdown() {
  this.isAppsDropdownOpen = !this.isAppsDropdownOpen;
  this.isProjectDropdownOpen = false;
  this.isProfileDropdownOpen = false;
}


  toggleProfileDropdown() {
    this.isAppsDropdownOpen =false;
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    if (this.isProfileDropdownOpen) {
      this.isProjectDropdownOpen = false;
    }
  }

  selectProject(project: any) {
    this.selectedProject = project;
    this.isProjectDropdownOpen = false;
  }

  closeDropdowns() {
    this.isProjectDropdownOpen = false;
    this.isProfileDropdownOpen = false;
    this.isAppsDropdownOpen = false;
  }

}