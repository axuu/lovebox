import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// angular module
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

// page
import { NewOrNotPage } from "../pages/new-or-not/new-or-not";
import { LogInPage } from "../pages/log-in/log-in";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { FillEmailPage } from "../pages/fill-email/fill-email";
import { SendEmailPage } from "../pages/send-email/send-email";
import { RegisterProfilePage } from "../pages/register-profile/register-profile";
import { EditProfilePage } from "../pages/edit-profile/edit-profile";
import { SetQuestionPage } from "../pages/set-question/set-question";
import { AnswerQuestionPage } from "../pages/answer-question/answer-question";
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MsgContentPage } from "../pages/msg-content/msg-content";
import { UserPage } from "../pages/user/user";

// page module
import { IntroPageModule } from '../pages/intro/intro.module';
import { AppRoutingModule } from '../router/router';

// ionic-native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";
import { InAppBrowser } from '@ionic-native/in-app-browser';

// provider
import { CameraProvider } from "../providers/util/camera.provider";

// Service
import { ToastService } from "../providers/util/toast.service";
import { UserRegisterService } from "../pages/sign-up/sign-up.service";
import { UserLoginService } from "../pages/log-in/log-in.service";
import { SetQuestionService } from "../pages/set-question/set-question.service";
import { HomeService } from "../pages/home/home.service";

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
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		RouterModule,
		IonicModule.forRoot(MyApp),
		IntroPageModule,
		AppRoutingModule,
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

