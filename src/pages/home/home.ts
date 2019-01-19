import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2'
import { AngularFireAuth } from 'angularfire2/auth';


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

  }
goLogin(){
  console.log("Username: "+ this.username);
  console.log("Password: "+ this.password);
 // this.changeLogo();
 // email authentication
 this.eauth.auth.signInWithEmailAndPassword(this.username,this.password).then(e=> {console.log(e)});

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
