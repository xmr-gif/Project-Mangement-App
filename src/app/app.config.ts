import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LayoutDashboard, Users,MessageSquare,Video,Bell,LogOut,Ticket, LayoutGrid,CalendarClock,
  ChartNoAxesGantt,LucideAngularModule} from 'lucide-angular';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        LayoutDashboard,
        Ticket,
        Video,
        Users,
        MessageSquare,
        Bell,
        ChartNoAxesGantt,
        LogOut,
        LayoutGrid,
        CalendarClock
      })
    ),

  ]
};
