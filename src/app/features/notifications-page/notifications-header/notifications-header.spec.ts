import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsHeader } from './notifications-header';

describe('NotificationsHeader', () => {
  let component: NotificationsHeader;
  let fixture: ComponentFixture<NotificationsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
