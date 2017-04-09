import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//used to be main fyi
// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  rootParams: any;

  constructor(platform: Platform) {
    //set official page to HomePage, its params to blah
    // this.rootPage = HomePage;
    // this.rootParams = { icons : false, titles: true };
    // this.rootParams.pageTitle = "H I V E ."

    // HomePage.rootParams = { icons : false, titles: true };
    // HomePage.rootParams.pageTitle = "H I V E ."

    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // openPage(page) {
  //   page.params.pageTitle = page.name;
  //   this.nav.setRoot(page.page, page.params);
  // }

}
