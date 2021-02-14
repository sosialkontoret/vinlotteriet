import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LotteryComponent } from './lottery/lottery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from '../core/guards/authentication/authentication.guard';
import { NewLotteryComponent } from './new-lottery/new-lottery.component';
import { EditLotteryComponent } from './edit-lottery/edit-lottery.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
