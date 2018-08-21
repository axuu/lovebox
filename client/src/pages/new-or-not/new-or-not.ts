import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SignUpPage } from "../sign-up/sign-up";

/**
 * Generated class for the NewOrNotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
