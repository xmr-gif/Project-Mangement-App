import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {NavbarComponent} from "../../shared/navbar/navbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Sidebar} from "../../shared/sidebar/sidebar";
import {NotificationsHeader} from './notifications-header/notifications-header';
import {NotificationsInbox} from './notifications-inbox/notifications-inbox';
import {NotificationCards} from './notification-cards/notification-cards';

@Component({
  selector: 'app-notifications-page',
  imports: [
    LucideAngularModule,
    NavbarComponent,
    ReactiveFormsModule,
    Sidebar,
    FormsModule,
    NotificationsHeader,
    NotificationsInbox,
    NotificationCards
  ],
  templateUrl: './notifications-page.html',
  styleUrl: './notifications-page.css',
})
export class NotificationsPage {

}
