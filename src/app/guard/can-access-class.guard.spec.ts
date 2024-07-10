import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canAccessClassGuard } from './can-access-class.guard';

describe('canAccessClassGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canAccessClassGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
