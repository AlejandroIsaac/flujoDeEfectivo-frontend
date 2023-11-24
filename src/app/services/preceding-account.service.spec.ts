import { TestBed } from '@angular/core/testing';

import { PrecedingAccountService } from './preceding-account.service';

describe('PrecedingAccountService', () => {
  let service: PrecedingAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecedingAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
