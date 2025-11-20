import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Meeting {
  title: string;
  time: string;
  duration: string;
}

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './meetings.html',
  styleUrls: ['./meetings.css']
})
export class MeetingsComponent {
  meetings: Meeting[] = [
    { title: 'Sprint Planning', time: 'Today, 3:00 PM', duration: '30m' },
    { title: 'Design Sync', time: 'Tomorrow, 10:00 AM', duration: '45m' },
    { title: 'Retro', time: 'Fri, 4:30 PM', duration: '60m' }
  ];
}
