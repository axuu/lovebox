import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  openBlog (){
    const browser = this.iab.create('https://lovebox2017.wordpress.com/', '_blank', 'location=no');
  //this.browser.show();
  }

}
