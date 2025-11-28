import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsPanel } from './team-details-panel';

describe('TeamDetailsPanel', () => {
  let component: TeamDetailsPanel;
  let fixture: ComponentFixture<TeamDetailsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailsPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDetailsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
