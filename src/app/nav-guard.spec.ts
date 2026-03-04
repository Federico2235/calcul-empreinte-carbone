import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { navGuard } from './nav-guard';

describe('navGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => navGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
