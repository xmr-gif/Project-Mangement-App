import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Discussion {
  title: string;
  replies: number;
}

@Component({
  selector: 'app-recent-discussions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-disscussions.html',
  styleUrls: ['./recent-disscussions.css']
})
export class RecentDiscussionsComponent {
  discussions: Discussion[] = [
    { title: 'Release scope for v1.3', replies: 12 },
    { title: 'API pagination approach', replies: 8 },
    { title: 'Design tokens cleanup', replies: 5 }
  ];
}
