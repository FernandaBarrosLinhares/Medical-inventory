import { TestBed } from '@angular/core/testing';

import { AceesLoginService } from './acees-login.service';

describe('AceesLoginService', () => {
  let service: AceesLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AceesLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
