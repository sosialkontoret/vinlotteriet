import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecules/molecules.module';
import { DrawComponent } from './draw';
import { WaitingToStartComponent } from './waiting-to-start';

const components = [DrawComponent, WaitingToStartComponent];

@NgModule({
  declarations: [...components],
  imports: [MoleculeModule],
  exports: [...components, MoleculeModule],
})
export class OrganismsModule {}
