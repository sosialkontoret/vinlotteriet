import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SharedComponentsModule } from '../shared-components.module';

const components = [ButtonComponent, CardComponent, InputEmailComponent, InputPasswordComponent, InputTextComponent];

@NgModule({
  declarations: [...components],
  imports: [SharedComponentsModule],
  exports: [...components],
})
export class AtomsModule {}
