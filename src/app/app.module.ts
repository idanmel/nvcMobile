import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeelingsUnmetPage } from '../pages/feelings-unmet/feelings-unmet'
import { FeelingsMetPage } from '../pages/feelings-met/feelings-met'
import { NeedsPage } from '../pages/needs/needs'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeelingsUnmetPage,
    FeelingsMetPage,
    NeedsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeelingsUnmetPage,
    FeelingsMetPage,
    NeedsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
