import { TestBed } from '@angular/core/testing';

import { SlottrakMealLogService } from './slottrak-meal-log.service';

describe('SlottrakMealLogService', () => {
  let service: SlottrakMealLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakMealLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
