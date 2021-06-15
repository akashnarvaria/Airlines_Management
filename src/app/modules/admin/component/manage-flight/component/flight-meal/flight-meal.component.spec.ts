import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMealComponent } from './flight-meal.component';

describe('FlightMealComponent', () => {
  let component: FlightMealComponent;
  let fixture: ComponentFixture<FlightMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
