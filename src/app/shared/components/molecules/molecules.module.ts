import { NgModule } from '@angular/core';
import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [AtomsModule, CommonModule, RouterModule],
  exports: [AtomsModule],
})
export class MoleculesModule {}
