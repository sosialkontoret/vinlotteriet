import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { EditLotteryTemplateComponent } from './edit-lottery-template/edit-lottery-template.component';
import { MyLotteriesTemplateComponent } from './my-lotteries-template/my-lotteries-template.component';
import { NewLotteryTemplateComponent } from './new-lottery-template/new-lottery-template.component';

const components = [EditLotteryTemplateComponent, MyLotteriesTemplateComponent, NewLotteryTemplateComponent];

@NgModule({
  declarations: [...components],
  imports: [OrganismsModule],
  exports: [...components],
})
export class TemplatesModule {}
