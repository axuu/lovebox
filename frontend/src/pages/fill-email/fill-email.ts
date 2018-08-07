import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SendEmailPage } from "../send-email/send-email";

/**
 * Generated class for the FillEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fill-email',
  templateUrl: 'fill-email.html',
})
export class FillEmailPage {
  myEmail:string;
  yourEmail:string;
  emails: {myemail: string, youremail: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
    
  emailsChanged() {
      this.emails = {
        myemail: this.myEmail,
        youremail: this.yourEmail
      }
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  toSendEmailPage($event, emails) {
      this.navCtrl.push(SendEmailPage, {
        emails : this.emails
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FillEmailPage');
  }

}
