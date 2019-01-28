import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { AngularFireAuth } from 'angularfire2/auth';
import {PrimaryTabsPage } from '../primary-tabs/primary-tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private username:string;
  private password:string;
  //eauth:AngularFireAuthModule;
  //fisrtOne: boolean = true;
  logoUrl: string = "assets/imgs/running-money-gif.gif";

  constructor(public eauth : AngularFireAuth,public navCtrl: NavController) {
    console.log("@alia login", this.eauth.auth.currentUser);
    if (this.eauth.auth.currentUser != null) {
      this.navCtrl.push(PrimaryTabsPage); 
    }
  }
goLogin(){
  console.log("Username: "+ this.username);
  console.log("Password: "+ this.password);
 // this.changeLogo();
 // email authentication
 this.eauth.auth.signInWithEmailAndPassword(this.username,this.password).then(e=> {
   console.log(e);
   // @ts-ignore
  // if (document.getElementsByName("Primary Tabs") != undefined) document.getElementsByName("Primary Tabs").style.display="block";
   this.navCtrl.setRoot(PrimaryTabsPage);
  });
 

}
//changeLogo() {
  //setTimeout(() => {
    //if (this.fisrtOne) {
     // this.logoUrl = "assets/imgs/money.png";
    //} else {
      //this.logoUrl = "assets/imgs/running-money-gif.gif";
    //}
    //this.fisrtOne = !this.fisrtOne;
    
  //}, 1000); 
  //this.changeLogo();
//}
goRegister(){
  this.navCtrl.push(RegistrationPage); 
}
}
