import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShoppingItemsComponent } from './edit-shopping-items.component';

describe('EditShoppingItemsComponent', () => {
  let component: EditShoppingItemsComponent;
  let fixture: ComponentFixture<EditShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShoppingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
