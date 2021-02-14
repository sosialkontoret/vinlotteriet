import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  exports: [...components, CommonModule],
  providers: [],
})
export class SharedModule {}
