import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLotteryTemplateComponent } from './edit-lottery-template.component';

describe('EditLotteryTemplateComponent', () => {
  let component: EditLotteryTemplateComponent;
  let fixture: ComponentFixture<EditLotteryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLotteryTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLotteryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
