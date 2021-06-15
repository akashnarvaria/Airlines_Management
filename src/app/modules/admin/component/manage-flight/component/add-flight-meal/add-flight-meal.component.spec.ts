import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightMealComponent } from './add-flight-meal.component';

describe('AddFlightMealComponent', () => {
  let component: AddFlightMealComponent;
  let fixture: ComponentFixture<AddFlightMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
