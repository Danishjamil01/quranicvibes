import { TestBed } from '@angular/core/testing';

import { BottomtabserviceService } from './bottomtabservice.service';

describe('BottomtabserviceService', () => {
  let service: BottomtabserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomtabserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
