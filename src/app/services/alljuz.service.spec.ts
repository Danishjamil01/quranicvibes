import { TestBed } from '@angular/core/testing';

import { AlljuzService } from './alljuz.service';

describe('AlljuzService', () => {
  let service: AlljuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlljuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
