import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightMealComponent } from './edit-flight-meal.component';

describe('EditFlightMealComponent', () => {
  let component: EditFlightMealComponent;
  let fixture: ComponentFixture<EditFlightMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
