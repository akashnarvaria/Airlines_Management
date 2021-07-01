import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFlightAncillaryComponent } from './add-flight-ancillary.component';

describe('AddFlightAncillaryComponent', () => {
  let component: AddFlightAncillaryComponent;
  let fixture: ComponentFixture<AddFlightAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightAncillaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
