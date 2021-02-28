import { NgModule } from '@angular/core';
import { AtomsModule } from '../atoms/atoms.module';
import { LotteryListItemComponent } from './lottery-list-item/lottery-list-item.component';
import { SharedComponentsModule } from '../shared-components.module';

const components = [LotteryListItemComponent];

@NgModule({
  declarations: [...components],
  imports: [AtomsModule, SharedComponentsModule],
  exports: [...components, AtomsModule],
})
export class MoleculesModule {}
