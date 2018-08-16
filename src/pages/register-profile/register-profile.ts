import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SendEmailPage } from "../send-email/send-email";
import { DatePicker } from "../../components/ionic2-date-picker/index";
import { CameraProvider } from "../../providers/util/camera.provider";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-register-profile',
  templateUrl: 'register-profile.html',
  providers: [ DatePicker ]
})
export class RegisterProfilePage {

  placeholder = 'assets/img/boy.png';
  chosenPicture: any;
  selectedDate: any;

  profilename:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider, public platform: Platform, public loadingCtrl: LoadingController) {

    this.datePicker.onDateSelected.subscribe(
      (date) => {
        this.selectedDate = date;
    });

  }

  saveProfile($event, profilename) {
     this.navCtrl.push(SendEmailPage, {
        profilename : this.profilename
      });
  }

  toMainPage() {
      this.navCtrl.push(HomePage);
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProfilePage');
  }

  showCalendar(){
    this.datePicker.showCalendar();
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

  dateselected(){

  }

}
