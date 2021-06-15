import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightAncillaryComponent } from './add-flight-ancillary.component';

describe('AddFlightAncillaryComponent', () => {
  let component: AddFlightAncillaryComponent;
  let fixture: ComponentFixture<AddFlightAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightAncillaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
