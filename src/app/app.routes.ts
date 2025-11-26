import { Routes } from '@angular/router';
import {Dashboard} from './features/dashboard/dashboard';
import {MeetingsPage} from './features/meetings-page/meetings-page';
import {NotificationsPage} from './features/notifications-page/notifications-page';


export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  {path:'meetings', component: MeetingsPage },
  {path:'notifications', component: NotificationsPage },


  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
