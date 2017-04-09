import {Component} from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
import {Page1Page} from "../page1/page1";
import {Page2Page} from "../page2/page2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = Page1Page;
  page2: any = Page2Page;

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = '';

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.showIcons = false;
    this.showTitles = true;
    this.pageTitle = "H I V E .";
  }



}
