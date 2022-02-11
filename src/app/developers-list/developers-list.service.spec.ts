import { TestBed } from '@angular/core/testing';

import { DevelopersListService } from '../developers-list/developers-list.service';

describe('DevelopersListService', () => {
  let service: DevelopersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
