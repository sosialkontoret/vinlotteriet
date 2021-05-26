import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { ThemeTemplateComponent } from './theme-template/theme-template.component';
import { SharedComponentsModule } from '../shared-components.module';

const components = [ThemeTemplateComponent];

@NgModule({
  declarations: [...components],
  imports: [OrganismsModule, SharedComponentsModule],
  exports: [...components, OrganismsModule],
})
export class TemplatesModule {}
