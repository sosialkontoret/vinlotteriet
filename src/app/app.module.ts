import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';
import { environment } from '@env';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'shared/shared.module';
import {CoreModule} from 'core/core.modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
