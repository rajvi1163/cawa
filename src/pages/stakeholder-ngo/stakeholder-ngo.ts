import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StakeHoldersListPage } from '../stake-holders-list/stake-holders-list';

/*
  Generated class for the StakeholderNGO page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stakeholder-ngo',
  templateUrl: 'stakeholder-ngo.html'
})
export class StakeholderNGOPage {
  stakeholderList = StakeHoldersListPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StakeholderNGOPage');
  }
  nextPage(){
    console.log("Navigate NOw");
    this.navCtrl.push(StakeHoldersListPage);
  }

}
