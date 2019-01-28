import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AddItem} from'../../model/additems/add-item.interface';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  //Creating new object
   addexpenses = {} as AddItem;
    userID : string;
  creditRef$: FirebaseListObservable <AddItem[]>; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,private afauth: AngularFireAuth) {
  //this.creditRef$ = this.database.list("Daily Expenses");
  this.afauth.authState.subscribe(user=>{
  if(user)this.userID=user.uid });
 
  }

save(addexpenses : AddItem)
{
  console.log(this.userID);
  console.log(addexpenses);
  //push everthing as string in firebase database
  //this.creditRef$.push(this.addexpenses);
 

  if(!this.userID) return;
  {

      
 this.creditRef$=this.database.list(`Daily Expense/${this.userID}`);
 this.creditRef$.push(this.addexpenses);
 this.navCtrl.push(AddPage); 
  /*Create an anonymous object 
    and push credit spent as number in firebase database
 /////////////////////
 this.creditRef$.push({

  userID :this.userID,
  creditspent: Number(this.addexpenses.creditspent),
  storename: this.addexpenses.storename,
  date:this.addexpenses.date,
  time: this.addexpenses.time,
  category:this.addexpenses.category
  });*/


  }
}
cancel()
{
  this.navCtrl.push(AddPage); 
}
}