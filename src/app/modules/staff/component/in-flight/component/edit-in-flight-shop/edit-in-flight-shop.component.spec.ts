import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInFlightShopComponent } from './edit-in-flight-shop.component';

describe('EditInFlightShopComponent', () => {
  let component: EditInFlightShopComponent;
  let fixture: ComponentFixture<EditInFlightShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInFlightShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInFlightShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
