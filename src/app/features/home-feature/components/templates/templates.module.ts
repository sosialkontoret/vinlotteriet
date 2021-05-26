import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { LotteryTemplateComponent } from './lottery-template/lottery-template.component';

const components = [LoginTemplateComponent, HomeTemplateComponent, RegisterTemplateComponent, LotteryTemplateComponent];

@NgModule({
  declarations: [...components],
  imports: [OrganismsModule],
  exports: [...components],
})
export class TemplatesModule {}
