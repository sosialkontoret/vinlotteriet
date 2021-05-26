import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyLotteriesPageComponent } from './my-lotteries-page.component';

describe('MyLotteriesPageComponent', () => {
  let component: MyLotteriesPageComponent;
  let fixture: ComponentFixture<MyLotteriesPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MyLotteriesPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLotteriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
