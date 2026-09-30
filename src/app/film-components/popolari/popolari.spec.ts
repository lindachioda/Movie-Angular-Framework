import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popolari } from './popolari';

describe('Popolari', () => {
  let component: Popolari;
  let fixture: ComponentFixture<Popolari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popolari],
    }).compileComponents();

    fixture = TestBed.createComponent(Popolari);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
