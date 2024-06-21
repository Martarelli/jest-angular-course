import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    await TestBed.configureTestingModule({
      imports: [AsynchronousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setTimeoutCheck set timoutResponse', () => {
    component.checkSetTimeout();
    expect(component.timeoutResponse).not.toBe('setTimeoutCheck');
    // jest.runAllTimers();
    jest.advanceTimersByTime(1000);
    expect(component.timeoutResponse).toBe('setTimeoutCheck');
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
