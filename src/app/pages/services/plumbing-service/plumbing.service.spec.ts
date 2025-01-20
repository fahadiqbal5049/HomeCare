import { TestBed } from '@angular/core/testing';

import { PlumbingService } from './plumbing.service';

describe('PlumbingService', () => {
  let service: PlumbingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlumbingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
