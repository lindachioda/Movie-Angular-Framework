import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriDettaglio } from './generi-dettaglio';

describe('GeneriDettaglio', () => {
  let component: GeneriDettaglio;
  let fixture: ComponentFixture<GeneriDettaglio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneriDettaglio],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneriDettaglio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
