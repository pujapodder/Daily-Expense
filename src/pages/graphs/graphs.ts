import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AddItem} from'../../model/additems/add-item.interface';
import { Chart } from 'chart.js';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
/**
 * Generated class for the GraphsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphs',
  templateUrl: 'graphs.html',
})
export class GraphsPage {
  userID : string;
  total : number = 0;
  creditData = [];
  storenameData = [];

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database:FirebaseServiceProvider) {
    this.getData();

  }

  ionViewDidLoad() {
    this.showGraph();
  }

  showGraph() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
            labels:this.storenameData,
            datasets: [{
  
                data: this.creditData,
               
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
  
    });
  }


        
  getData()
  {
    this.database.getDb()
    .then((data) => {
        console.log("@alia sub state", data);
        this.database.getDailyExpensesRef()
        .subscribe(list => {
            console.log("@alia list",list);
            this.creditData = [];
            this.storenameData = [];
            list.forEach(item => {
                this.total += Number (item['creditspent']);
                this.creditData.push(Number(item['creditspent']));
                this.storenameData.push(item['storename']);
            });
            this.showGraph();
            console.log("@alia done");
        });
    }).catch(err => {
        // TODO :: show error
        console.log(err);
    });
  }

      
}