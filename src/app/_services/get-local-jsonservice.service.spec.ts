
import { TestBed } from '@angular/core/testing';

import { GetLocalJSONServiceService } from './get-local-jsonservice.service';

describe('GetLocalJSONServiceService', () => {
  let service: GetLocalJSONServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocalJSONServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
