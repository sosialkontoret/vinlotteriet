import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLotteryTemplateComponent } from './new-lottery-template.component';

describe('NewLotteryTemplateComponent', () => {
  let component: NewLotteryTemplateComponent;
  let fixture: ComponentFixture<NewLotteryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewLotteryTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLotteryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
