import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightDetailsComponent } from './flight-details.component';
import { of } from 'rxjs';
import { CommonService } from '../../../../../../shared/service/common.service';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  applyFilter() method', () => {
    component.flightDetails=[{arrival:'test'}]
    component.input='test'
    spyOn(component, 'applyFilter').and.callThrough();
    component.applyFilter();
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });

  it('should call  applyFilter() method', () => {
    component.input=''
    component.flightDetails=[]
    spyOn(component, 'applyFilter').and.callThrough();
    component.applyFilter();
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });

  it('should call  applyFilter() method', () => {
    component.input='test'
    component.flightDetails=[{arrival:'mock'}]
    spyOn(component, 'applyFilter').and.callThrough();
    component.applyFilter();
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });

  it('should call  getFlightDetails() method', () => {
    spyOn(component, 'getFlightDetails').and.callThrough();
    spyOn(CommonService.prototype, 'getFlightDetails').and.returnValue(of({} as any))
    component.getFlightDetails();
    fixture.detectChanges();
    expect(component.getFlightDetails).toHaveBeenCalled();
  });

});
