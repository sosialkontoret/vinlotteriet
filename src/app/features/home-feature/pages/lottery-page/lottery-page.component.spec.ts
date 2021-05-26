import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LotteryPageComponent } from './lottery-page.component';

describe('LotteryComponent', () => {
  let component: LotteryPageComponent;
  let fixture: ComponentFixture<LotteryPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LotteryPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
