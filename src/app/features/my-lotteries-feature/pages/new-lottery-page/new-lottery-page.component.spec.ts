import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewLotteryPageComponent } from './new-lottery-page.component';

describe('NewLotteryComponent', () => {
  let component: NewLotteryPageComponent;
  let fixture: ComponentFixture<NewLotteryPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NewLotteryPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLotteryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
