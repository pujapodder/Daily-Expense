import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import{AddItem} from'../../model/additems/add-item.interface';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  updateexpenselistRef$ : FirebaseListObservable<any> 
  userID : string; 
  id: string;
  updatedexpense= {} as AddItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,private afauth: AngularFireAuth) {
   this.getUserID();
   this.afauth.authState.subscribe(user=>{
    if(user)
    this.userID=user.uid 
    this.updateexpenselistRef$= this.database.list(`Daily Expense/${this.userID}`);
    
  });

    this.id = this.navParams.get("id");
    this.updatedexpense.storename= this.navParams.get("storename");
    this.updatedexpense.creditspent= this.navParams.get("creditspent");
    this.updatedexpense.category= this.navParams.get("category");
    this.updatedexpense.date= this.navParams.get("date");
    this.updatedexpense.time= this.navParams.get("time");

    console.log(this.id,this.updatedexpense.storename,this.updatedexpense.creditspent, this.updatedexpense.category, this.updatedexpense.date, this.updatedexpense.time ); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  update(id,storename,creditspent,category,date,time)
  {
    this.updateexpenselistRef$.update(this.id,{
        storename:  this.updatedexpense.storename,
        creditspent: this.updatedexpense.creditspent, 
        category: this.updatedexpense.category,
        date: this.updatedexpense.date, 
        time: this.updatedexpense.time}).then(uExpense => 
          {this.navCtrl.push(EditPage);}, error =>
          {console.log(error);})
    
  }
  cancel()
  {
    this.navCtrl.push(EditPage); 
  }
  getUserID()
  {
   
  }
}