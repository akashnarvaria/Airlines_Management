import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingItemsComponent } from './add-shopping-items.component';

describe('AddShoppingItemsComponent', () => {
  let component: AddShoppingItemsComponent;
  let fixture: ComponentFixture<AddShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
