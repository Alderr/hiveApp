import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


//adjustment
import { Nav } from 'ionic-angular';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/v2/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

//@IonicPage()
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // adjustment
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  rootParams: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
    this.rootParams = { icons : false, titles: true };
    this.rootParams.pageTitle = "H I V E .";

  }

}
