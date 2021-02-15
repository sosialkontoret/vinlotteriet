import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from './components/templates/templates.module';
import { HeaderComponent } from './components/header';
import { DrawComponent } from './components/draw';
import { CountDownComponent } from './components/count-down';
import { WaitingToStartComponent } from './components/waiting-to-start';

const deprecatedComponents = [HeaderComponent, DrawComponent, CountDownComponent, WaitingToStartComponent];

@NgModule({
  declarations: [...deprecatedComponents],
  imports: [TemplatesModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [TemplatesModule, CommonModule, ...deprecatedComponents],
})
export class SharedModule {}
