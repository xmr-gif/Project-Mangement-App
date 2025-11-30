import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCards } from './notification-cards';

describe('NotificationCards', () => {
  let component: NotificationCards;
  let fixture: ComponentFixture<NotificationCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
