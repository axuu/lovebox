import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SignUpPage } from "../sign-up/sign-up";

@IonicPage()
@Component({
  selector: 'page-new-or-not',
  templateUrl: 'new-or-not.html',
})
export class NewOrNotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  toSignUpPage() {
      this.navCtrl.push(SignUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOrNotPage');
  }

}
