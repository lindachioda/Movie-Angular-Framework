import { TestBed } from '@angular/core/testing';

import { UserServicies } from './user-servicies';

describe('UserServicies', () => {
  let service: UserServicies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
