import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { components } from './index';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
