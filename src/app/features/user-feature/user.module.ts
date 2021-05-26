import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { TemplatesModule } from './components/templates/templates.module';
import { UserPageComponent } from './pages/user-page/user-page.component';

const components = [UserPageComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, TemplatesModule, UserRoutingModule],
  exports: [components],
})
export class UserModule {}
