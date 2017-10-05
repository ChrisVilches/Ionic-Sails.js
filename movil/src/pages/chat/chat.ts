import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  messages: any[] = [];

  newMessage: string = "";

  io: any;

  welcomeMessage: string = "Bienvenido al chat. Este chat ocupa el cliente de Sockets de Sails.js.";

  sendMessage(){
    this.io.socket.post('/message', { text: this.newMessage }, function(res){
      this.newMessage = "";
      this.zone.run(() => this.messages.push(res));
    }.bind(this));
  }

  constructor(public navCtrl: NavController, public zone: NgZone) {

    console.log("Construyendo un chat.ts");

    this.io = sailsIOClient(socketIOClient);
    this.io.sails.url = 'http://localhost:1337';

    this.io.socket.get("/message", function(res){
      console.log("Se obtienen todos los mensajes para mostrarlos inicialmente.")
      this.zone.run(() => this.messages = res);
		}.bind(this));

    this.io.socket.get('/subscribeToMessages', function(msg) {
      console.log(msg)
    });

    this.io.socket.on('message', function(msg){
      this.zone.run(() => this.messages.push(msg.data));
    }.bind(this));



  }

}
