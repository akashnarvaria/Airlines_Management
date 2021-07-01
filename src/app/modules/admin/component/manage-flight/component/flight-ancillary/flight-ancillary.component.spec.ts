import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightAncillaryComponent } from './flight-ancillary.component';

describe('FlightAncillaryComponent', () => {
  let component: FlightAncillaryComponent;
  let fixture: ComponentFixture<FlightAncillaryComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightAncillaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
