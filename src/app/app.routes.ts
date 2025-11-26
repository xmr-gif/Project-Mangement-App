import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { DiscussionPage } from './features/discussion-page/discussion-page';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'discussions', component: DiscussionPage },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },



];
