import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LotteryComponent } from './lottery';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { UserComponent } from './user';
import { AuthenticationGuard } from '../core/guards/authentication/authentication.guard';
import { EditLotteryComponent } from './edit-lottery';
import { PagesComponent } from './pages.component';
import { MyLotteriesComponent } from './my-lotteries';
import { NewLotteryComponent } from './new-lottery';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'lotteries/:id',
        component: LotteryComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'user',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            component: UserComponent,
          },
          {
            path: 'my-lotteries',
            component: MyLotteriesComponent,
          },
          {
            path: 'my-lotteries/new',
            component: NewLotteryComponent,
          },
          {
            path: 'my-lotteries/:id',
            component: EditLotteryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
