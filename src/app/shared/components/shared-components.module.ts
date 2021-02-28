import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { pipes } from '../pipes';

/**
 * Exports modules that are required by all components, both Atoms, Molecules, Organisms and Templates
 */
@NgModule({
  declarations: [...pipes],
  exports: [...pipes, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class SharedComponentsModule {}
