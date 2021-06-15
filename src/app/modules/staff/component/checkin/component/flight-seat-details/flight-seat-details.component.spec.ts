import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSeatDetailsComponent } from './flight-seat-details.component';

describe('FlightSeatDetailsComponent', () => {
  let component: FlightSeatDetailsComponent;
  let fixture: ComponentFixture<FlightSeatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightSeatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
