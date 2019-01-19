import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';

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
  private username:string;
  private password:string;
  private Cpassword:string;

  constructor(public eauth : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
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
      this.eauth.auth.createUserWithEmailAndPassword(this.username,this.password).then(e=>{console.log(e)}) ;
    
    }
  
  
  
  }
}
