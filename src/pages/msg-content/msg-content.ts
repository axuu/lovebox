import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SetQuestionPage } from "../set-question/set-question";
import { HomePage } from "../home/home";
import { Moment } from "../../model/moment";

/**
 * Generated class for the AddMsgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-msg-content',
  templateUrl: 'msg-content.html',
})
export class MsgContentPage {

  moment:Moment = new Moment();
  public currentTime: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    // window.setInterval(
		// 	()=>this.currentTime=new Date()
    // ,1000);
    
    this.moment = navParams.get('moment');
    console.log(this.moment);
  }

  toHomePage() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMsgPage');
  }
  
}
