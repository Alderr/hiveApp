import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { HomePage } from '../pages/home/home';

import 'rxjs/add/operator/map';

/*
  Generated class for the ShowCase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.keys(obj).map(function(e) {
//   return [Number(e), obj[e]];
// });

@Injectable()
export class ShowCase {

  page1Week2 : any;
  page1Week3 : any;

  sample : any;

  constructor(public http: Http) {

    //call http and have set them already.
    this.http.get('https://fancy-gray.glitch.me/weekTwo').map(res => res.json()).subscribe(data => {
     this.page1Week2 = data;
     console.log(this.page1Week2);
   });

   this.http.get('https://fancy-gray.glitch.me/weekThree').map(res => res.json()).subscribe(data => {
    this.page1Week3 = data;
    console.log(this.page1Week3);
  });
    console.log('Hello ShowCase Provider');
  }

  sendDataSlide1(num : number){
    if (num == 2) {
      return this.page1Week2;
    }

    else {
      return this.page1Week3;
    }
  }

  sendDataSlide2(num : number) {

  }



}
