import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightAncillaryComponent } from './edit-flight-ancillary.component';

describe('EditFlightAncillaryComponent', () => {
  let component: EditFlightAncillaryComponent;
  let fixture: ComponentFixture<EditFlightAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightAncillaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
