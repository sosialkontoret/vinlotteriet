import { NgModule } from '@angular/core';
import { TemplatesModule } from './components/templates/templates.module';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [TemplatesModule, CommonModule],
})
export class SharedModule {}
