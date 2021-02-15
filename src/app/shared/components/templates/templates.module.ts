import { NgModule } from '@angular/core';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NewLotteryTemplateComponent } from './new-lottery-template/new-lottery-template.component';
import { ThemeTemplateComponent } from './theme-template/theme-template.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginTemplateComponent, NewLotteryTemplateComponent, ThemeTemplateComponent],
  imports: [OrganismsModule, CommonModule, RouterModule, OwlDateTimeModule, OwlNativeDateTimeModule, FormsModule, ReactiveFormsModule],
  exports: [OrganismsModule, LoginTemplateComponent, NewLotteryTemplateComponent, ThemeTemplateComponent],
})
export class TemplatesModule {}
