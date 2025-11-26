import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {NavbarComponent} from "../../shared/navbar/navbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Sidebar} from "../../shared/sidebar/sidebar";
import {NgClass} from '@angular/common';
import {NotificationsHeader} from './notifications-header/notifications-header';

@Component({
  selector: 'app-notifications-page',
  imports: [
    LucideAngularModule,
    NavbarComponent,
    ReactiveFormsModule,
    Sidebar,
    FormsModule,
    NotificationsHeader
  ],
  templateUrl: './notifications-page.html',
  styleUrl: './notifications-page.css',
})
export class NotificationsPage {

}
