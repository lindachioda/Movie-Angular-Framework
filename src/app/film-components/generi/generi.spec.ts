import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generi } from './generi';

describe('Generi', () => {
  let component: Generi;
  let fixture: ComponentFixture<Generi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generi],
    }).compileComponents();

    fixture = TestBed.createComponent(Generi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
