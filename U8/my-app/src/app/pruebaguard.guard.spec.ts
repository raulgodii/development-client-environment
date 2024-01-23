import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pruebaguardGuard } from './pruebaguard.guard';

describe('pruebaguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pruebaguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
