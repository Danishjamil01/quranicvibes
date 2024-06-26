import { TestBed } from '@angular/core/testing';

import { PostmethodService } from './postmethod.service';

describe('PostmethodService', () => {
  let service: PostmethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostmethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
