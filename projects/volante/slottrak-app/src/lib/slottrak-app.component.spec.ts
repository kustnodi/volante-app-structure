import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottrakAppComponent } from './slottrak-app.component';

describe('SlottrakAppComponent', () => {
  let component: SlottrakAppComponent;
  let fixture: ComponentFixture<SlottrakAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottrakAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottrakAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
