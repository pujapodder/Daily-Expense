import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';



var config = {
  apiKey: "AIzaSyCbakCjRn8Wagnvg-PN7QzoIWL0-70aj4E",
  authDomain: "dailyexpense-1bdd9.firebaseapp.com",
  databaseURL: "https://dailyexpense-1bdd9.firebaseio.com",
  projectId: "dailyexpense-1bdd9",
  storageBucket: "dailyexpense-1bdd9.appspot.com",
  messagingSenderId: "888148143079"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireModule.initializeApp(config),
   AngularFireDatabaseModule,
    AngularFireAuthModule ,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseServiceProvider,

  ]
})
export class AppModule {}
