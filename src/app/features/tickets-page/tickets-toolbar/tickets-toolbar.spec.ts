import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsToolbar } from './tickets-toolbar';

describe('TicketsToolbar', () => {
  let component: TicketsToolbar;
  let fixture: ComponentFixture<TicketsToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
