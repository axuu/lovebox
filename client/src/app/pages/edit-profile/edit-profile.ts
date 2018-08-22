import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SendEmailPage } from "../send-email/send-email";
import { CameraProvider } from "../../providers/util/camera.provider";
import { UserPage } from "../user/user";


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  placeholder = 'assets/img/profile-me.jpg';
  chosenPicture: any;
  selectedDate: any;

  profilename:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider, public platform: Platform, public loadingCtrl: LoadingController) {

  }

  user = {
    name: 'Xu Zhang',
    profileImage: 'assets/img/profile-me.jpg',
    coverImage: 'assets/img/profile-background.jpg',
    location: 'Edinburgh, UK',
    description: 'The ideal life is to live a ideal life.',
  }

  saveProfile($event, profilename) {
     this.navCtrl.push(SendEmailPage, {
        profilename : this.profilename
      });
  }

  toUserPage() {
      this.navCtrl.push(UserPage);
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProfilePage');
  }

  changePicture() {

    let actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    let loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    let loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

}
