import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {PrimaryTabsPage } from '../primary-tabs/primary-tabs';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private auth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }
yes(){
  this.auth.auth.signOut().then(() => {
    // @ts-ignore
    //if (document.getElementsByName("Primary Tabs") != undefined) document.getElementsByName("Primary Tabs").style.display="none";
    this.navCtrl.setRoot(HomePage);
  });
  
}
no(){
  this.navCtrl.push(PrimaryTabsPage); 
}
}
