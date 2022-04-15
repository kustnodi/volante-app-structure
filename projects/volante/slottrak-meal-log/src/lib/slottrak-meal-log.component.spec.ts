import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottrakMealLogComponent } from './slottrak-meal-log.component';

describe('SlottrakMealLogComponent', () => {
  let component: SlottrakMealLogComponent;
  let fixture: ComponentFixture<SlottrakMealLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottrakMealLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottrakMealLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
