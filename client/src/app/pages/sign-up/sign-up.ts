import { Component } from '@angular/core';
import { AlertController, App, LoadingController, NavController, IonicPage } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { FillEmailPage } from "../fill-email/fill-email";
import { User } from '../../model/user';
import { UserRegisterService } from './sign-up.service';
import { FormsModule } from "@angular/forms";
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-sign-up',
	templateUrl: 'sign-up.html',
})
export class SignUpPage {

	public user: User = new User();

	constructor(
		private navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public app: App,
		public userRegisterService: UserRegisterService,
		private toastCtrl: ToastController,
	) {

	}

	// TODO: extract Toast as a component
	toFillEmail() {
		let toast = this.toastCtrl.create({
			message: 'Sign up successfully',
			duration: 3000,
			position: 'middle',
		});
		toast.present();
	}

	toLogInPage() {
		this.navCtrl.push(LogInPage);
	}

	// doRegister() {

	//   this.userRegisterService.register(this.user)
	//     .subscribe(
	//     data => {
	//       console.log(data);
	//     },
	//     error => {
	//       console.error(error);
	//     }
	//     )
	//   console.log(this.user);

	// }

	// testEmail() {
	//   let email = this.userForm.get("email").value;
	//   this.userRegisterService.testEmail(email)
	//     .subscribe(
	//       data => {
	//         console.log(data);
	//       },
	//       error => {
	//         console.error(error);
	//       }
	//     )
	// }

}
