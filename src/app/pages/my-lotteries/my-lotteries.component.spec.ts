import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { MyLotteriesComponent } from './my-lotteries.component';

describe('MyLotteriesComponent', () => {
  let component: MyLotteriesComponent;
  let fixture: ComponentFixture<MyLotteriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLotteriesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLotteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
