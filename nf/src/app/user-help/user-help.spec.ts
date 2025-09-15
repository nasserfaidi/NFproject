import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelp } from './user-help';

describe('UserHelp', () => {
  let component: UserHelp;
  let fixture: ComponentFixture<UserHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
