import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterModule } from '@angular/router';
import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  exports: [...components, CommonModule],
  providers: [],
})
export class SharedModule {}
