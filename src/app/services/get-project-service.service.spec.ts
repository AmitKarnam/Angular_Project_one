import { TestBed } from '@angular/core/testing';

import { GetProjectServiceService } from './get-project-service.service';

describe('GetProjectServiceService', () => {
  let service: GetProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
