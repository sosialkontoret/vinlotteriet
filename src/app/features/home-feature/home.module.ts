import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TemplatesModule } from './components/templates/templates.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LotteryPageComponent } from './pages/lottery-page/lottery-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const components = [HomePageComponent, LoginPageComponent, LotteryPageComponent, RegisterPageComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, TemplatesModule, HomeRoutingModule],
  exports: [components],
})
export class HomeModule {}
