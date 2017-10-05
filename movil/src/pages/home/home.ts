import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quote: string = "";

  getRandomQuote(){
    this.http.get('http://localhost:1337/quote/random').subscribe(
      data => {
        this.quote = <string>data;
      }
    );
  }

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.getRandomQuote();
  }

}
