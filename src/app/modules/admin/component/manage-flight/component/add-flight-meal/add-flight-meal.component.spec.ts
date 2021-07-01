import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFlightMealComponent } from './add-flight-meal.component';

describe('AddFlightMealComponent', () => {
  let component: AddFlightMealComponent;
  let fixture: ComponentFixture<AddFlightMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
