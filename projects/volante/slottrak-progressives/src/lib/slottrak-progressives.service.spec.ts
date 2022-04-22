import { TestBed } from '@angular/core/testing';

import { SlottrakProgressivesService } from './slottrak-progressives.service';

describe('SlottrakProgressivesService', () => {
  let service: SlottrakProgressivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakProgressivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
