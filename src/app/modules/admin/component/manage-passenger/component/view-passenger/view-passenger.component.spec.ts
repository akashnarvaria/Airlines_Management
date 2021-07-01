import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewPassengerComponent } from './view-passenger.component';

describe('ViewPassengerComponent', () => {
  let component: ViewPassengerComponent;
  let fixture: ComponentFixture<ViewPassengerComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassengerComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
