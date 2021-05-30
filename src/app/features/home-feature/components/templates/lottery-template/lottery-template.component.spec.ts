import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTemplateComponent } from './lottery-template.component';

describe('LotteryTemplateComponent', () => {
  let component: LotteryTemplateComponent;
  let fixture: ComponentFixture<LotteryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LotteryTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
