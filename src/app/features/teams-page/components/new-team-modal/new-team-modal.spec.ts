import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamModal } from './new-team-modal';

describe('NewTeamModal', () => {
  let component: NewTeamModal;
  let fixture: ComponentFixture<NewTeamModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTeamModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTeamModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
