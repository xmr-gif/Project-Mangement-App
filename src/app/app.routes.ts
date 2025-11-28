import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { TeamsPage } from './features/teams-page/teams-page';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'teams', component: TeamsPage },  

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];