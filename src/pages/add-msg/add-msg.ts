import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SetQuestionPage } from "../set-question/set-question";

/**
 * Generated class for the AddMsgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-msg',
  templateUrl: 'add-msg.html',
})
export class AddMsgPage {

  content:string;
  public currentTime: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  window.setInterval(
			()=>this.currentTime=new Date()
		,60000);

  }

  sendContent($event, content) {
      this.navCtrl.push(SetQuestionPage, {
        content : this.content,
        date : new Date()
      });

      console.log(this.content);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMsgPage');
  }
  
}
