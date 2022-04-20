import { TestBed } from '@angular/core/testing';

import { SlottrakMachinesConfigService } from './slottrak-machines-config.service';

describe('SlottrakMachinesConfigService', () => {
  let service: SlottrakMachinesConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakMachinesConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
