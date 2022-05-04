import { TestBed } from '@angular/core/testing';

import { GridlistService } from './gridlist.service';

describe('GridlistService', () => {
  let service: GridlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
