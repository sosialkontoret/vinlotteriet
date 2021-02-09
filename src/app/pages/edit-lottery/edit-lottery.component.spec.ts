import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { EditLotteryComponent } from './edit-lottery.component';

describe('EditLotteryComponent', () => {
  let component: EditLotteryComponent;
  let fixture: ComponentFixture<EditLotteryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLotteryComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
