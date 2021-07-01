import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditShoppingItemsComponent } from './edit-shopping-items.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditShoppingItemsComponent', () => {
  let component: EditShoppingItemsComponent;
  let fixture: ComponentFixture<EditShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShoppingItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
