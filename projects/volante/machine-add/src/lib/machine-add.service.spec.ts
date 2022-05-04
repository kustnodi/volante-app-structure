import { TestBed } from '@angular/core/testing';

import { MachineAddService } from './machine-add.service';

describe('MachineAddService', () => {
  let service: MachineAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
