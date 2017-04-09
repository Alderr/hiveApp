import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ShowCase } from '../../providers/show-case';

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [ ShowCase ]
})
export class Page2Page {


  savings : any;
  weekNum : number;

  constructor(public navCtrl: NavController, public showCase : ShowCase) {

    this.savings = [
      "You Missed Out On 6$",
      "Did You Drop 3$?",
      "I Got Your 4$"
    ];

    this.weekNum = 1;
    //UNCOMMENT API
    // this.savings = ["Loading.."];

  }

  printYo(savings) {
    console.log("Babe");
    console.log(savings);

  }

  nextWeek(){
    //UNCOMMENT WHEN BRINGING API
        if (this.weekNum < 3) {
          this.weekNum++;
          // this.Items = ["Loading.."];

        }

        // if (week == 2) {
        //   this.Items = ;
        // }
        //
        // if (week == 3) {
        //   this.Items = ;
        // }
  }

  simulate(){

  }



}
