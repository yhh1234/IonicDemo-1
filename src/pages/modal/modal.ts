import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  constructor(public modalCtrl: ViewController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }


}
