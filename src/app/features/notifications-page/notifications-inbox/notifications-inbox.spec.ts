import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsInbox } from './notifications-inbox';

describe('NotificationsInbox', () => {
  let component: NotificationsInbox;
  let fixture: ComponentFixture<NotificationsInbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsInbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsInbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
