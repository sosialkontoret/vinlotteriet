import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextComponent } from './input-text/input-text.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, CardComponent, InputEmailComponent, InputPasswordComponent, InputTextComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, CardComponent, InputEmailComponent, InputPasswordComponent, InputTextComponent],
})
export class AtomsModule {}
