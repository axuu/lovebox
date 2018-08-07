import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EditProfilePage } from "../edit-profile/edit-profile";
import { LogInPage } from "../log-in/log-in";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user = {
    name: 'Jack',
    profileImage: 'assets/img/profile-me.jpg',
    coverImage: 'assets/img/profile-background.jpg',
    location: 'Edinburgh, UK',
    description: 'The more you do something, the better you will become at it.',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toHomePage() {
    this.navCtrl.push(HomePage);
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }

  toAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
