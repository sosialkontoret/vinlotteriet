import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

const components = [];

@NgModule({
  declarations: [...components],
  imports: [SharedModule],
  exports: [...components, SharedModule],
})
export class MoleculeModule {}
