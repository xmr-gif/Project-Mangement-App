import { Routes } from '@angular/router';
import {Dashboard} from './features/dashboard/dashboard';
import {MeetingsPage} from './features/meetings-page/meetings-page';
import {TicketsPage} from './features/tickets-page/tickets-page';
import {NotificationsPage} from './features/notifications-page/notifications-page';
import {TeamsPage} from './features/teams-page/teams-page';


export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  {path:'meetings', component: MeetingsPage },
  {path:'tickets', component: TicketsPage },
  {path:'notifications', component: NotificationsPage },
  {path:'teams', component: TeamsPage },


  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
