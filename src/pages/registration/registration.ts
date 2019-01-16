import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  username:string;
  password:string;
  Cpassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  goSignup(){

    //console.log("Username: "+ this.username);
    //console.log("Password: "+ this.password);
    if(this.username.length==0||this.password.length==0||this.Cpassword.length==0)
    {
      alert("Please fill the required filled");
    }
    else if (this.password!=this.Cpassword)
    {
      alert("Passwords arenot same");

    }
    else
    {
      alert("Sign up complete");
      console.log("Username: "+ this.username);
      console.log("Password: "+ this.password);
    }
  
  
  
  }
}
