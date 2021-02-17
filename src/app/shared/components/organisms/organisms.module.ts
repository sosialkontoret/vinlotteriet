import { NgModule } from '@angular/core';
import { MoleculesModule } from '../molecules/molecules.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [MoleculesModule, CommonModule, RouterModule],
  exports: [MoleculesModule],
})
export class OrganismsModule {}
