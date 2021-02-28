import { NgModule } from '@angular/core';
import { MoleculesModule } from '../molecules/molecules.module';
import { LotteryListComponent } from './lottery-list/lottery-list.component';
import { SharedComponentsModule } from '../shared-components.module';

const components = [LotteryListComponent];

@NgModule({
  declarations: [...components],
  imports: [MoleculesModule, SharedComponentsModule],
  exports: [...components, MoleculesModule],
})
export class OrganismsModule {}
