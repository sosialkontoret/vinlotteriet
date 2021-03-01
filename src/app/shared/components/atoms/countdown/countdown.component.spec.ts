import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';

describe('CountDownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountdownComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
