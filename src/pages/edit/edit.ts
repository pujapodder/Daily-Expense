import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AddItem} from'../../model/additems/add-item.interface';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  userID : string;
  item; 
  expenselistRef$ : FirebaseListObservable<AddItem[]> 

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,private afauth: AngularFireAuth) {
  
    
      this.getData();
      

  }

  ionViewDidLoad() {
     console.log('ionViewDidLoad EditPage');
  }
getData()
{
  this.afauth.authState.subscribe(user=>{
      if(user)
      this.userID=user.uid 
      this.expenselistRef$= this.database.list(`Daily Expense/${this.userID}`);
      this.expenselistRef$.subscribe(x=> 
      {console.log(x); 
      this.item=x 
      console.log(this.item)} )
    });

}



removeitem(id)
{
  console.log(id);
  this.expenselistRef$.remove(id);
}

edititem(id,storename,creditspent,category,date,time )
{ console.log(id,storename,creditspent,category,date,time ); 
  this.navCtrl.push(UpdatePage, {id,storename,creditspent,category,date,time}); 
}
}
