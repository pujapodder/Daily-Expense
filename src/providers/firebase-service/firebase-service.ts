import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(private afauth: AngularFireAuth, private database:AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getDb() {
    return new Promise((resolve, reject) => {
      this.afauth.authState.subscribe(user=>{
        if (user) {
          resolve(user);
        } else {
          reject({ message: "User not found" });
        }
      });
    });
  }

  getDailyExpensesRef() {
    console.log("@alia ref", this.afauth.auth.currentUser.uid);
    return this.database.list(`Daily Expense/${this.afauth.auth.currentUser.uid}`);
  }

}
