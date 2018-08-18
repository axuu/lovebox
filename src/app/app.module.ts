import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RouterModule } from '@angular/router';

import { HttpModule } from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";
import { NewOrNotPage } from "../pages/new-or-not/new-or-not";
import { LogInPage } from "../pages/log-in/log-in";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { FillEmailPage } from "../pages/fill-email/fill-email";
import { SendEmailPage } from "../pages/send-email/send-email";
import { RegisterProfilePage } from "../pages/register-profile/register-profile";

// ionic-native
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { CameraProvider } from "../providers/util/camera.provider";
import { UserPage } from "../pages/user/user";
import { ToastService } from "../providers/util/toast.service";
import { EditProfilePage } from "../pages/edit-profile/edit-profile";

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { AnswerQuestionPage } from "../pages/answer-question/answer-question";
import { MsgContentPage } from "../pages/msg-content/msg-content";
import { UserRegisterService } from "../pages/sign-up/sign-up.service";
import { SetQuestionPage } from "../pages/set-question/set-question";
import { UserLoginService } from "../pages/log-in/log-in.service";
import { SetQuestionService } from "../pages/set-question/set-question.service";
import { HomeService } from "../pages/home/home.service";
// import { IntroHeaderComponent } from '../components/intro-header/intro-header.component';

@NgModule({
	declarations: [
		MyApp,
		AboutPage,
		HomePage,
		NewOrNotPage,
		LogInPage,
		SignUpPage,
		FillEmailPage,
		SendEmailPage,
		RegisterProfilePage,
		UserPage,
		EditProfilePage,
		AnswerQuestionPage,
		MsgContentPage,
		SetQuestionPage,
		IntroPage,
		// IntroHeaderComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AboutPage,
		HomePage,
		NewOrNotPage,
		LogInPage,
		SignUpPage,
		FillEmailPage,
		SendEmailPage,
		RegisterProfilePage,
		UserPage,
		EditProfilePage,
		AnswerQuestionPage,
		MsgContentPage,
		SetQuestionPage,
		IntroPage,
		// IntroHeaderComponent,
	],
	providers: [
		StatusBar,
		SplashScreen,
		CameraProvider,
		Camera,
		ToastService,
		InAppBrowser,
		UserRegisterService,
		UserLoginService,
		SetQuestionService,
		HomeService,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		}
	]
})
export class AppModule {}

