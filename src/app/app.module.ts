import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import {Page1Page} from "../pages/page1/page1";
import {Page2Page} from "../pages/page2/page2";

import { SuperTabsModule } from 'ionic2-super-tabs';
import {PartialHomePage} from "../pages/partial-home/partial-home";
import {PageToPushPage} from "../pages/page-to-push/page-to-push";

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser'

import { ShowCase } from '../providers/show-case';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    PageToPushPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    PageToPushPage
  ],
  providers: [ShowCase, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
