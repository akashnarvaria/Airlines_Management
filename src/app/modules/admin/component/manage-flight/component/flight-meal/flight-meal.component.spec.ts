import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightMealComponent } from './flight-meal.component';

describe('FlightMealComponent', () => {
  let component: FlightMealComponent;
  let fixture: ComponentFixture<FlightMealComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
