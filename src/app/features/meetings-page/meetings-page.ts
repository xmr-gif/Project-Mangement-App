import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar';
import {Sidebar} from '../../shared/sidebar/sidebar';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-meetings-page',
  imports: [
    NavbarComponent,
    Sidebar,
    LucideAngularModule
],
  templateUrl: './meetings-page.html',
  styleUrl: './meetings-page.css',
})
export class MeetingsPage {

}
