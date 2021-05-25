import { NgModule } from '@angular/core';
import { AtomsModule } from '../atoms/atoms.module';
import { LotteryListItemComponent } from './lottery-list-item/lottery-list-item.component';
import { SharedComponentsModule } from '../shared-components.module';
import { ParticipantListItemComponent } from './participant-list-item/participant-list-item.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';

const components = [AddParticipantComponent, LotteryListItemComponent, ParticipantListItemComponent];

@NgModule({
  declarations: [...components],
  imports: [AtomsModule, SharedComponentsModule],
  exports: [...components, AtomsModule],
})
export class MoleculesModule {}
