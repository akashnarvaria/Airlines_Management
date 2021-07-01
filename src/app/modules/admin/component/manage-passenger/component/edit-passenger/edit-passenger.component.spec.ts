import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPassengerComponent } from './edit-passenger.component';

describe('EditPassengerComponent', () => {
  let component: EditPassengerComponent;
  let fixture: ComponentFixture<EditPassengerComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPassengerComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
