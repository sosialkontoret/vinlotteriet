import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NewLotteryTemplateComponent } from './new-lottery-template/new-lottery-template.component';
import { ThemeTemplateComponent } from './theme-template/theme-template.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { SharedComponentsModule } from '../shared-components.module';
import { MyLotteriesTemplateComponent } from './my-lotteries-template/my-lotteries-template.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { EditLotteryTemplateComponent } from './edit-lottery-template/edit-lottery-template.component';
import { LotteryTemplateComponent } from './lottery-template/lottery-template.component';
import { DrawComponent } from '../deprecated/draw';
import { WaitingToStartComponent } from '../deprecated/waiting-to-start';

const components = [
  EditLotteryTemplateComponent,
  LoginTemplateComponent,
  HomeTemplateComponent,
  MyLotteriesTemplateComponent,
  NewLotteryTemplateComponent,
  RegisterTemplateComponent,
  ThemeTemplateComponent,
  UserTemplateComponent,
  LotteryTemplateComponent,
];

const deprecatedComponents = [DrawComponent, WaitingToStartComponent];

@NgModule({
  declarations: [...components, ...deprecatedComponents],
  imports: [OrganismsModule, SharedComponentsModule],
  exports: [...components],
})
export class TemplatesModule {}
