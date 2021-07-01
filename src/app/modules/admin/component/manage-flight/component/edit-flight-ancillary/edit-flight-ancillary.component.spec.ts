import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFlightAncillaryComponent } from './edit-flight-ancillary.component';

describe('EditFlightAncillaryComponent', () => {
  let component: EditFlightAncillaryComponent;
  let fixture: ComponentFixture<EditFlightAncillaryComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightAncillaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.flightDetails={
      flightid : 1
    }
  });

});
