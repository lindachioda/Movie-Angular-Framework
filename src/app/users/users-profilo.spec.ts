import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfilo } from './users-profilo';

describe('UsersProfilo', () => {
  let component: UsersProfilo;
  let fixture: ComponentFixture<UsersProfilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersProfilo],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersProfilo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
