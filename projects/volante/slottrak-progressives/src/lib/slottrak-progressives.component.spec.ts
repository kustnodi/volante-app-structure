import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottrakProgressivesComponent } from './slottrak-progressives.component';

describe('SlottrakProgressivesComponent', () => {
  let component: SlottrakProgressivesComponent;
  let fixture: ComponentFixture<SlottrakProgressivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottrakProgressivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottrakProgressivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
