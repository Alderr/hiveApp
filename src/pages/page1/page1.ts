import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2Page } from "../page2/page2";
import { ShowCase } from '../../providers/show-case';


@Component({
  selector: 'page-page1',
  styles: [`

    `],
  templateUrl: 'page1.html',
  providers: [ ShowCase ]
})
export class Page1Page {

  page2 : any = Page2Page;
  Items: any;
  weekNum : number;
  simulateBoolean : boolean;
  rootNavCtrl: NavController;


  constructor(public navCtrl: NavController, public navParams: NavParams, public showCase : ShowCase) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.simulateBoolean = false;
    this.weekNum = 1;
    this.Items = [
      "Loading.."
      ];

    this.Items = [
      ["Eggs", 4],
      ["Milk", 7],
      ["Pepsi Soda", 3]
    ]

    // this.Items = ;
  }

  simulate() {
    console.log("It works. Change Days.");
    this.simulateBoolean = !this.simulateBoolean;


    // if (this.weekNum == 2) {
    //   this.Items = ;
    // }
    //
    // if (this.weekNum == 3) {
    //   this.Items = ;
    // }
  }

  nextWeek() {

//UNCOMMENT WHEN BRINGING API
    if (this.weekNum < 3) {
      this.weekNum++;
      // this.Items = ["Loading.."];

    }

    if (this.weekNum == 2) {
      this.Items = [
        "Loading.."
      ];

      this.Items = this.showCase.sendDataSlide1(this.weekNum);
    }

    if (this.weekNum == 3) {
      this.Items = [
        "Loading.."
      ];

      this.Items = this.showCase.sendDataSlide1(this.weekNum);
    }

    console.log("It works! Week!");


  }
  // pushPage() {
  //   this.rootNavCtrl.push(PageToPushPage);
  // }

  // pushTab() {
  //   this.navCtrl.push(Page2Page);
  //
  // }

}
