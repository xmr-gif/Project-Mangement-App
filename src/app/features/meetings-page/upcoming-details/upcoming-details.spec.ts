import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDetails } from './upcoming-details';

describe('UpcomingDetails', () => {
  let component: UpcomingDetails;
  let fixture: ComponentFixture<UpcomingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
