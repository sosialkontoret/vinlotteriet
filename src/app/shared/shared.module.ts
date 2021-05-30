import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from './components/templates/templates.module';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  exports: [TemplatesModule, CommonModule, SharedComponentsModule],
})
export class SharedModule {}
