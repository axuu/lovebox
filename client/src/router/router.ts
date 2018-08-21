import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrNotPage } from "../pages/new-or-not/new-or-not";
import { NewOrNotPageModule } from "../pages/new-or-not/new-or-not.module";


const routes: Routes = [
	{ path: '', redirectTo: '/newornot', pathMatch: 'full' },
	{ path: 'newornot', component: NewOrNotPage },
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
