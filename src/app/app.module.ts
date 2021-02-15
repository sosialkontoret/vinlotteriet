import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';
import { environment } from '@env';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, USE_EMULATOR } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [{ provide: USE_EMULATOR, useValue: ['localhost', 5001] }],
  bootstrap: [AppComponent],
})
export class AppModule {}
