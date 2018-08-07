// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component } from '@angular/core';
import { AlertController, App, LoadingController, NavController, IonicPage } from 'ionic-angular';
import { SignUpPage } from "../sign-up/sign-up";
import { HomePage } from "../home/home";
import { User } from "../../model/user";
import { UserLoginService } from './log-in.service';

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  public user:User = new User();
  public loginForm: any;

  constructor(private navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public userLoginService: UserLoginService, public app: App) {

  }

  login() {
    // let loading = this.loadingCtrl.create({
    //   duration: 500
    // });

    // loading.onDidDismiss(() => {
    //   let alert = this.alertCtrl.create({
    //     title: 'Logged in!',
    //     subTitle: '',
    //     buttons:  [
    //       {
    //         text: 'OK',
    //         handler: data => {
    //           this.navCtrl.push(HomePage);
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // });

    // loading.present();

  }

  public doLogin(){
    //var result = this.userLoginService.login(this.user);
    this.navCtrl.push(HomePage);
  }

  toSignUpPage() {
      this.navCtrl.push(SignUpPage);
  }
  
}
