import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { UserTemplateComponent } from './user-template/user-template.component';

const components = [UserTemplateComponent];

@NgModule({
  declarations: [...components],
  imports: [OrganismsModule],
  exports: [...components],
})
export class TemplatesModule {}
