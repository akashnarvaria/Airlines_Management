import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFlightMealComponent } from './edit-flight-meal.component';

describe('EditFlightMealComponent', () => {
  let component: EditFlightMealComponent;
  let fixture: ComponentFixture<EditFlightMealComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
