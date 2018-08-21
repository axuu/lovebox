import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Moment } from "../../model/moment";
import { SetQuestionService } from './set-question.service';

/**
 * Generated class for the SetQuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-set-question',
  templateUrl: 'set-question.html',
})
export class SetQuestionPage {

  local: Storage;
  public moment: Moment = new Moment();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public SetQuestionService: SetQuestionService) {
    this.moment.content = navParams.get('content');
    this.moment.date = navParams.get('date');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetQuestionPage');
  }

  saveMoment() {
    
    // this.SetQuestionService.save(this.moment)
    //   .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    //   )

    console.log(this.moment);
    this.navCtrl.push(HomePage, {
        moment : this.moment,
    });

  }

}
