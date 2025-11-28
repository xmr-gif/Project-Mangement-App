import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meeting } from '../features/meetings-page/models/meetings.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  private meetingsSubject = new BehaviorSubject<Meeting[]>([
    { titre: 'Sprint Planning', dateDebut: '2025-11-25', heureDebut: '10:00', heureFin: '11:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2','https://i.pravatar.cc/150?img=2']
     },
    { titre: 'Client Review', dateDebut: '2025-11-27', heureDebut: '14:00', heureFin: '15:00' ,
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2']
    },
    { titre: 'Team Standup', dateDebut: '2025-11-28', heureDebut: '09:00', heureFin: '09:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Design Sync', dateDebut: '2025-11-29', heureDebut: '13:00', heureFin: '14:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Product Demo', dateDebut: '2025-11-30', heureDebut: '16:00', heureFin: '17:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Retrospective', dateDebut: '2025-12-01', heureDebut: '15:00', heureFin: '16:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Planning Meeting', dateDebut: '2025-12-02', heureDebut: '11:00', heureFin: '12:00',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'] },
    { titre: 'Code Review', dateDebut: '2025-12-03', heureDebut: '14:30', heureFin: '15:30',
      Participants: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'], },
  ]);

  meetings$ = this.meetingsSubject.asObservable();

  constructor() { }

  getMeetings(): Observable<Meeting[]> {
    return this.meetings$;
  }

  getAllMeetings(): Meeting[] {
    return this.meetingsSubject.getValue();
  }

  getUpcomingMeetings(limit: number = 5): Meeting[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.meetingsSubject.getValue()
      .filter(meeting => {
        const meetingDate = new Date(meeting.dateDebut);
        return meetingDate >= today;
      })
      .sort((a, b) => {
        return new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime();
      })
      .slice(0, limit);
  }

  addMeeting(meeting: Meeting): void {
    const currentMeetings = this.meetingsSubject.getValue();
    this.meetingsSubject.next([...currentMeetings, meeting]);
  }
}
