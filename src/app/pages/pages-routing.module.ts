import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LotteryComponent } from './lottery';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';
import { AuthenticationGuard } from '../core/guards/authentication/authentication.guard';
import { NewLotteryComponent } from './new-lottery';
import { EditLotteryComponent } from './edit-lottery';
import { PagesComponent } from './pages.component';

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
        path: 'home/:message',
        component: HomeComponent,
      },
      {
        path: 'lottery/:id',
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
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'new-lottery',
        component: NewLotteryComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'edit-lottery/:id',
        component: EditLotteryComponent,
        canActivate: [AuthenticationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
