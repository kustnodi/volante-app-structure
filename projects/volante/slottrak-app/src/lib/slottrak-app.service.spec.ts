import { TestBed } from '@angular/core/testing';

import { SlottrakAppService } from './slottrak-app.service';

describe('SlottrakAppService', () => {
  let service: SlottrakAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
