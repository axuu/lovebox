import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { HomePage } from "../home/home";
import { MsgContentPage } from "../msg-content/msg-content";
import { Moment } from "../../model/moment";

/**
 * Generated class for the SetQuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-answer-question',
  templateUrl: 'answer-question.html',
})
export class AnswerQuestionPage {

  moment:Moment = new Moment();
  selectedAnswer: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public app: App) {

    this.moment = navParams.get('moment');
    console.log(this.moment);

  }

  backToHome() {
    if (this.selectedAnswer == "answerC") {
      let alert = this.alertCtrl.create({
        title: 'Correct!',
        subTitle: '',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.push(MsgContentPage, {
                moment : this.moment,
              });
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Wrong!',
        subTitle: 'Try 15 minutes later.',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.push(HomePage, {
                thatmoment : this.moment,
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetQuestionPage');
  }

}
