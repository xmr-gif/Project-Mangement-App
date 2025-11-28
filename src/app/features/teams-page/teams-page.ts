import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCard } from './components/team-card/team-card';
import { NewTeamModal } from './components/new-team-modal/new-team-modal';
import { TeamDetailsPanel } from './components/team-details-panel/team-details-panel';
import { Team } from './models/team.model';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [
    CommonModule, 
    TeamCard, 
    NewTeamModal,
    TeamDetailsPanel,
    NavbarComponent,
    Sidebar
  ],
  templateUrl: './teams-page.html',
  styleUrl: './teams-page.css'
})
export class TeamsPage {
  searchQuery = '';
  isNewTeamModalOpen = false;
  viewMode: 'grid' | 'list' = 'grid';
  isSortDropdownOpen = false;
  currentSort: 'name-asc' | 'name-desc' | 'members-asc' | 'members-desc' = 'name-asc';
  
  selectedTeam: Team | null = null;  

  teams: Team[] = [
    {
      id: '1',
      name: 'Core Platform',
      memberCount: 8,
      createdAt: new Date('2024-01-15'), 
      members: [
        { id: '1', name: 'Alex Carter', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: '2', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: '3', name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: '4', name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: '5', name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: '6', name: 'Lisa Brown', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: '7', name: 'Tom Anderson', avatar: 'https://i.pravatar.cc/150?img=7' },
        { id: '8', name: 'Anna Martinez', avatar: 'https://i.pravatar.cc/150?img=8' },
      ]
    },
    {
      id: '2',
      name: 'Growth & Analytics',
      memberCount: 6,
      createdAt: new Date('2024-03-22'),
      members: [
        { id: '9', name: 'Priya Singh', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: '10', name: 'David Lee', avatar: 'https://i.pravatar.cc/150?img=10' },
        { id: '11', name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?img=11' },
        { id: '12', name: 'Chris Taylor', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: '13', name: 'Nina Patel', avatar: 'https://i.pravatar.cc/150?img=13' },
        { id: '14', name: 'Robert Kim', avatar: 'https://i.pravatar.cc/150?img=14' },
      ]
    },
    {
      id: '3',
      name: 'Customer Success',
      memberCount: 5,
      createdAt: new Date('2024-05-10'),
      members: [
        { id: '15', name: 'Daniel Lee', avatar: 'https://i.pravatar.cc/150?img=15' },
        { id: '16', name: 'Sophie Turner', avatar: 'https://i.pravatar.cc/150?img=16' },
        { id: '17', name: 'Kevin Park', avatar: 'https://i.pravatar.cc/150?img=17' },
        { id: '18', name: 'Rachel Green', avatar: 'https://i.pravatar.cc/150?img=18' },
        { id: '19', name: 'Mark Johnson', avatar: 'https://i.pravatar.cc/150?img=19' },
      ]
    },
    {
      id: '4',
      name: 'Design System',
      memberCount: 4,
      createdAt: new Date('2024-08-05'),
      members: [
        { id: '20', name: 'Mia Chen', avatar: 'https://i.pravatar.cc/150?img=20' },
        { id: '21', name: 'Lucas Wright', avatar: 'https://i.pravatar.cc/150?img=21' },
        { id: '22', name: 'Emma Watson', avatar: 'https://i.pravatar.cc/150?img=22' },
        { id: '23', name: 'Oliver Smith', avatar: 'https://i.pravatar.cc/150?img=23' },
      ]
    }
  ];

  get filteredTeams() {
    let filtered = this.teams;
    
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(team => 
        team.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    return this.sortTeams(filtered);
  }

  sortTeams(teams: Team[]): Team[] {
    const sorted = [...teams];
    
    switch(this.currentSort) {
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'members-asc':
        return sorted.sort((a, b) => a.memberCount - b.memberCount);
      case 'members-desc':
        return sorted.sort((a, b) => b.memberCount - a.memberCount);
      default:
        return sorted;
    }
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  openNewTeamModal() {
    this.isNewTeamModalOpen = true;
  }

  closeNewTeamModal() {
    this.isNewTeamModalOpen = false;
  }

  onTeamCreated(newTeam: Partial<Team>) {
    this.teams.push(newTeam as Team);
  }

  toggleSortDropdown() {
    this.isSortDropdownOpen = !this.isSortDropdownOpen;
  }

  selectSort(sortType: 'name-asc' | 'name-desc' | 'members-asc' | 'members-desc') {
    this.currentSort = sortType;
    this.isSortDropdownOpen = false;
  }

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  //   selection d'une equipe pour voir les details
  viewTeamDetails(team: Team) {
    this.selectedTeam = team;
  }

  // fermeture du panneau de détails
  closeTeamDetails() {
    this.selectedTeam = null;
  }
  // Méthode pour formater la date de manière lisible
formatDate(date: Date): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
}