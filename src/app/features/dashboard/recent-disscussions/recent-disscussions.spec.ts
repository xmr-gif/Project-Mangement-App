import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDisscussions } from './recent-disscussions';

describe('RecentDisscussions', () => {
  let component: RecentDisscussions;
  let fixture: ComponentFixture<RecentDisscussions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentDisscussions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentDisscussions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
