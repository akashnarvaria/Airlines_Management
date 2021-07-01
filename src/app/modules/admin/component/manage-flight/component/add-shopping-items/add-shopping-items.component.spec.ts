import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { AddShoppingItemsComponent } from './add-shopping-items.component';

describe('AddShoppingItemsComponent', () => {
  let component: AddShoppingItemsComponent;
  let fixture: ComponentFixture<AddShoppingItemsComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
