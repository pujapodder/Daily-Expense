import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;

  fisrtOne: boolean = true;
  logoUrl: string = "assets/imgs/running-money-gif.gif";

  constructor(public navCtrl: NavController) {

  }
goLogin(){
  console.log("Username: "+ this.username);
  console.log("Password: "+ this.password);
  this.changeLogo();
}
changeLogo() {
  setTimeout(() => {
    if (this.fisrtOne) {
      this.logoUrl = "assets/imgs/money.png";
    } else {
      this.logoUrl = "assets/imgs/running-money-gif.gif";
    }
    this.fisrtOne = !this.fisrtOne;
    
  }, 1000); 
  this.changeLogo();
}
goRegister(){
  this.navCtrl.push(RegistrationPage); 
}
}
