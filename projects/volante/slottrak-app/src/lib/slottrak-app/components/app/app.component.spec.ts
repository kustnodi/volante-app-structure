import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotTrakAppComponent } from './app.component';

describe('AppComponent', () => {
  let component: SlotTrakAppComponent;
  let fixture: ComponentFixture<SlotTrakAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotTrakAppComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotTrakAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
