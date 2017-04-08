import { TestBed, inject } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService]
    });
  });

  it('should ...', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));

  it('should connect to the server', inject([SecurityService], (service: SecurityService) => {

  }));
});
