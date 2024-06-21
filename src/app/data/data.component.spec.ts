import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    };
    await TestBed.configureTestingModule({
      imports: [DataComponent],
      providers: [
        {
          provide: FakeService, useValue: fakeServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    const expRes = {
      name: "Martarelli"
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expRes.name);
  });

  it('should getServiceData set errorMessage', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(() => errorResponse));
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found');
  });

  it('should getServiceData set Good Morning', () => {
    const expRes = {
      name: "Martarelli",
      time: 7
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();

    expect(component.greeting).toBe("Good Morning");
  });

  it('should getServiceData set Good Day', () => {
    const expRes = {
      name: "Martarelli",
      time: 14
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();

    expect(component.greeting).toBe("Good Day");
  });

  it('should getServiceData set Good Evening', () => {
    const expRes = {
      name: "Martarelli",
      time: 22
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();

    expect(component.greeting).toBe("Good Evening");
  });

});
