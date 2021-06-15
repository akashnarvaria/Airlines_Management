import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncilleryComponent } from './ancillery.component';

describe('AncilleryComponent', () => {
  let component: AncilleryComponent;
  let fixture: ComponentFixture<AncilleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncilleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncilleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
