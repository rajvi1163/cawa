import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/*
  Generated class for the StakeHoldersList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stake-holders-list',
  templateUrl: 'stake-holders-list.html'
})
export class StakeHoldersListPage {
  public response:any;
  public stakeholdersdetails:any;
  public isHomePage = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.http.get('assets/data/acts/stakeholder-new.json').map(res => res.json().StakeHolder).subscribe(data => {
      console.log(data);
      this.response=data;
      this.stakeholdersdetails=this.response;
      
      // fillups.innerHTML=data.titles[0];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StakeHoldersListPage');
  }

}
