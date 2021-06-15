import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAncillaryComponent } from './add-ancillary.component';

describe('AddAncillaryComponent', () => {
  let component: AddAncillaryComponent;
  let fixture: ComponentFixture<AddAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAncillaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
