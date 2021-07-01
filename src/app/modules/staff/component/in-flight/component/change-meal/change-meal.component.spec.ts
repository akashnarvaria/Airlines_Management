import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeMealComponent } from './change-meal.component';
import { FormsModule } from '@angular/forms';

describe('ChangeMealComponent', () => {
  let component: ChangeMealComponent;
  let fixture: ComponentFixture<ChangeMealComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
