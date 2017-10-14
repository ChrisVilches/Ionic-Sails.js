import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  text: string = "Esta es una string muy larga, muy larga, muy larga, muy larga, muy larga, muy larga, muy larga, muy larga, muy larga."

  constructor(public navCtrl: NavController) {



  }

}
