import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NewLotteryTemplateComponent } from './new-lottery-template/new-lottery-template.component';
import { ThemeTemplateComponent } from './theme-template/theme-template.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { SharedComponentsModule } from '../shared-components.module';
import { MyLotteriesTemplateComponent } from './my-lotteries-template/my-lotteries-template.component';
import { UserTemplateComponent } from './user-template/user-template.component';

const components = [
  LoginTemplateComponent,
  HomeTemplateComponent,
  MyLotteriesTemplateComponent,
  NewLotteryTemplateComponent,
  RegisterTemplateComponent,
  ThemeTemplateComponent,
  UserTemplateComponent,
];

@NgModule({
  declarations: [...components],
  imports: [OrganismsModule, SharedComponentsModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  exports: [...components],
})
export class TemplatesModule {}
