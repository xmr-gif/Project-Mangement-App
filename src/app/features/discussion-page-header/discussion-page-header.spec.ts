import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPageHeader } from './discussion-page-header';

describe('DiscussionPageHeader', () => {
  let component: DiscussionPageHeader;
  let fixture: ComponentFixture<DiscussionPageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionPageHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionPageHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
