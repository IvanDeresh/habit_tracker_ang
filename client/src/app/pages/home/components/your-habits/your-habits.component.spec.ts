import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHabitsComponent } from './your-habits.component';

describe('YourHabitsComponent', () => {
  let component: YourHabitsComponent;
  let fixture: ComponentFixture<YourHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourHabitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YourHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
