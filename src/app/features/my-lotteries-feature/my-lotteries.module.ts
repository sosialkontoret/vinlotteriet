import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLotteriesRoutingModule } from './my-lotteries-routing.module';
import { TemplatesModule } from './components/templates/templates.module';
import { MyLotteriesPageComponent } from './pages/my-lotteries-page/my-lotteries-page.component';
import { EditLotteryPageComponent } from './pages/edit-lottery-page/edit-lottery-page.component';
import { NewLotteryPageComponent } from './pages/new-lottery-page/new-lottery-page.component';

const components = [EditLotteryPageComponent, MyLotteriesPageComponent, NewLotteryPageComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, TemplatesModule, MyLotteriesRoutingModule],
  exports: [components],
})
export class MyLotteriesModule {}
