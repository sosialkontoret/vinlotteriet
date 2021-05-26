import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecules/molecules.module';

const components = [];

@NgModule({
  declarations: [...components],
  imports: [MoleculeModule],
  exports: [...components, MoleculeModule],
})
export class OrganismsModule {}
