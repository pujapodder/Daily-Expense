import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AddItem} from'../../model/additems/add-item.interface';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'
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

  creditRef$: FirebaseListObservable <AddItem[]>; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
  this.creditRef$ = this.database.list("Daily Expenses");
  }

save(addexpenses : AddItem)
{
  console.log(addexpenses);
  //push everthing as string in firebase database
  this.creditRef$.push(this.addexpenses);
  /*Create an anonymous object 
    and push credit spent as number in firebase database
 
 */
 
  // this.creditRef$.push({
  //creditspent: Number(this.addexpenses.creditspent);
  //});
}
}