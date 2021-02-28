import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryListItemComponent } from './lottery-list-item.component';

describe('LotteryListItemComponent', () => {
  let component: LotteryListItemComponent;
  let fixture: ComponentFixture<LotteryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
