import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLotteriesTemplateComponent } from './my-lotteries-template.component';

describe('MyLotteriesTemplateComponent', () => {
  let component: MyLotteriesTemplateComponent;
  let fixture: ComponentFixture<MyLotteriesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLotteriesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLotteriesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should onCreate', () => {
    expect(component).toBeTruthy();
  });
});
