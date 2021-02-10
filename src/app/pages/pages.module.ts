import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '@env';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { components } from './index';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    PagesRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFirestore, AngularFireStorage],
})
export class PagesModule {}
