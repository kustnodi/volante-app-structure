import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottrakMachinesComponent } from './slottrak-machines.component';

describe('SlottrakMachinesComponent', () => {
  let component: SlottrakMachinesComponent;
  let fixture: ComponentFixture<SlottrakMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottrakMachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottrakMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
