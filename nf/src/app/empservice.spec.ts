import { TestBed } from '@angular/core/testing';

import { Empservsice } from './empservsice';

describe('Empservsice', () => {
  let service: Empservsice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empservsice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
