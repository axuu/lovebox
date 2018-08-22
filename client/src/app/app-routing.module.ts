import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'welcome',
		pathMatch: 'full'
	},
	{
		path: 'intro',
		loadChildren: './pages/intro/intro.module#IntroPageModule'
	},
	{
		path: 'welcome',
		loadChildren: './pages/welcome/welcome.module#WelcomePageModule'
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
