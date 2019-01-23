import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';
/**
 * Generated class for the PrimaryTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html'
})
export class PrimaryTabsPage {

  addRoot = 'AddPage'
  editRoot = 'EditPage'
  deleteRoot = 'DeletePage'
  graphsRoot = 'GraphsPage'
  logoutRoot = 'LogoutPage'

  constructor(public navCtrl: NavController) {}


//logout(){
  //this.navCtrl.pop();
//}
}