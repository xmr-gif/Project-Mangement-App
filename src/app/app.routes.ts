import { Routes } from '@angular/router';
import {Dashboard} from './features/dashboard/dashboard';
import {Meetings} from './features/meetings/meetings';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  {path: 'meetings', component: Meetings },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
