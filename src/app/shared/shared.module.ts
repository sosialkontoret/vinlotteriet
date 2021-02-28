import { NgModule } from '@angular/core';
import { TemplatesModule } from './components/templates/templates.module';
import { HeaderComponent } from './components/header';
import { DrawComponent } from './components/draw';
import { CountDownComponent } from './components/count-down';
import { WaitingToStartComponent } from './components/waiting-to-start';
import { SharedComponentsModule } from './components/shared-components.module';

const deprecatedComponents = [HeaderComponent, DrawComponent, CountDownComponent, WaitingToStartComponent];

@NgModule({
  declarations: [...deprecatedComponents],
  imports: [TemplatesModule, SharedComponentsModule],
  exports: [TemplatesModule, SharedComponentsModule, ...deprecatedComponents],
})
export class SharedModule {}
