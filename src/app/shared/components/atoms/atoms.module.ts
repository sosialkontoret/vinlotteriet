import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SharedComponentsModule } from '../shared-components.module';
import { InputIncrementComponent } from './input-increment/input-increment.component';
import { InputDateComponent } from './input-date/input-date.component';

const components = [ButtonComponent, CardComponent, InputTextComponent, InputIncrementComponent, InputDateComponent];

@NgModule({
  declarations: [...components],
  imports: [SharedComponentsModule],
  exports: [...components],
})
export class AtomsModule {}
