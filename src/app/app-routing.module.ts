import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'core/guards/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home-feature/home.module').then(m => m.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user-feature/user.module').then(m => m.UserModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'my-lotteries',
    loadChildren: () => import('./features/my-lotteries-feature/my-lotteries.module').then(m => m.MyLotteriesModule),
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
