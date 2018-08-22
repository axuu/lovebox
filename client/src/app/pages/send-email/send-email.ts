import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { HomePage } from "../home/home";
import { RegisterProfilePage } from "../register-profile/register-profile";
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-send-email',
  templateUrl: 'send-email.html',
})
export class SendEmailPage implements OnInit {

  useremails: any;
  time: any;
  timetxt: string;
  h: number;
  m: number;
  s: number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.useremails = navParams.get('emails');
  }

  ngOnInit() {
    this.timetxt = "24:00:00";
    this.time = setTimeout(() => {
      this.start();
    }, 1000);
  }

  start() {
    this.timetxt = "23:59:59";
    this.h = 23;
    this.m = 59;
    this.s = 59;
    this.time = setInterval(() => {
      this.run();
    }, 1000)
  }

  run() {
    --this.s;
    if (this.s < 0) {
      --this.m;
      this.s = 59;
    }
    if (this.m < 0) {
      --this.h;
      this.m = 59
    }
    if (this.h < 0) {
      this.s = 0;
      this.m = 0;
    }
    this.timetxt = this.addo(this.h) + ":" + this.addo(this.m) + ":" + this.addo(this.s);
  }

  addo(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return n;
    }
  }

  toRegisterProfilePage() {

      let alert = this.alertCtrl.create({
        title: 'Your invitation has been sent to your partner!',
        subTitle: '',
        buttons:  [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.push(RegisterProfilePage);
            }
          }
        ]
      });
      alert.present();
      
  }

  toLogInPage() {
    this.navCtrl.push(LogInPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FillEmailPage');
  }

}
