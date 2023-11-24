import { TestBed } from '@angular/core/testing';

import { RootAccountService } from './root-account.service';

describe('RootAccountService', () => {
  let service: RootAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
