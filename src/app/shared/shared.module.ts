import { NgModule } from '@angular/core';
import { TemplatesModule } from './components/templates/templates.module';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  exports: [TemplatesModule, CommonModule, SharedComponentsModule],
})
export class SharedModule {}
