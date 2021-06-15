import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAncillaryComponent } from './flight-ancillary.component';

describe('FlightAncillaryComponent', () => {
  let component: FlightAncillaryComponent;
  let fixture: ComponentFixture<FlightAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightAncillaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
