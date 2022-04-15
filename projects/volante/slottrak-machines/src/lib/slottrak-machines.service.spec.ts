import { TestBed } from '@angular/core/testing';

import { SlottrakMachinesService } from './slottrak-machines.service';

describe('SlottrakMachinesService', () => {
  let service: SlottrakMachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakMachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
