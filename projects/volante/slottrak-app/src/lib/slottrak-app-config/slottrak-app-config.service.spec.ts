import { TestBed } from '@angular/core/testing';

import { SlottrakAppConfigService } from './slottrak-app-config.service';

describe('SlottrakAppConfigService', () => {
  let service: SlottrakAppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakAppConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
