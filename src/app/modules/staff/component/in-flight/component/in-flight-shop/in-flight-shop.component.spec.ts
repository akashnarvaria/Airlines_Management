import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightShopComponent } from './in-flight-shop.component';

describe('InFlightShopComponent', () => {
  let component: InFlightShopComponent;
  let fixture: ComponentFixture<InFlightShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InFlightShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
