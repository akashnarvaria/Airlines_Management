import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePassengerComponent } from './manage-passenger.component';

describe('ManagePassengerComponent', () => {
  let component: ManagePassengerComponent;
  let fixture: ComponentFixture<ManagePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
