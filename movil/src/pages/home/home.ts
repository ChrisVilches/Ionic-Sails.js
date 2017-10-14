import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quote: string = "";

  getRandomQuote(){
    this.http.get(this.urlService.baseUrl + 'quote/random').subscribe(
      data => {
        this.quote = <string>data;
      }
    );
  }

  constructor(public navCtrl: NavController, private http: HttpClient, private urlService: UrlService) {
    this.getRandomQuote();
  }

}
