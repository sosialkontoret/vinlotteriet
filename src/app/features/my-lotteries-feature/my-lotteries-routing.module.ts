import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLotteriesPageComponent } from './pages/my-lotteries-page/my-lotteries-page.component';
import { NewLotteryPageComponent } from './pages/new-lottery-page/new-lottery-page.component';
import { EditLotteryPageComponent } from './pages/edit-lottery-page/edit-lottery-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyLotteriesPageComponent,
  },
  {
    path: 'new',
    component: NewLotteryPageComponent,
  },
  {
    path: ':id',
    component: EditLotteryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLotteriesRoutingModule {}
