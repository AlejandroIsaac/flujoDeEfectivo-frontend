import { TestBed } from '@angular/core/testing';

import { AccountTreeService } from './account-tree.service';

describe('AccountTreeService', () => {
  let service: AccountTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
