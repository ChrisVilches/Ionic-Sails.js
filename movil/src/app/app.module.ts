import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UrlService } from '../services/url.service';

import { AboutPage } from '../pages/about/about';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ShortenLongStringPipe } from '../pipes/shorten-long-string.pipe';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ChatPage,
    HomePage,
    TabsPage,
    ShortenLongStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ChatPage,
    HomePage,
    TabsPage
  ],
  providers: [
    UrlService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
