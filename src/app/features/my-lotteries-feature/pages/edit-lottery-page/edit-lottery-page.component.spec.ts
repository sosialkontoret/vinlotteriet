import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditLotteryPageComponent } from './edit-lottery-page.component';

describe('EditLotteryComponent', () => {
  let component: EditLotteryPageComponent;
  let fixture: ComponentFixture<EditLotteryPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditLotteryPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLotteryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
