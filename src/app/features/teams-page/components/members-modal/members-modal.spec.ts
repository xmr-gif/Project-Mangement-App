import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersModal } from './members-modal';

describe('MembersModal', () => {
  let component: MembersModal;
  let fixture: ComponentFixture<MembersModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
