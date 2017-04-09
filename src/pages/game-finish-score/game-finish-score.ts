import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GameFinishScore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-finish-score',
  templateUrl: 'game-finish-score.html'
})
export class GameFinishScorePage {
  public scoreToDisplay = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scoreToDisplay = this.navParams.data;
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameFinishScorePage');
  }
  gotoHomePage(){
    console.log("goto Home Page triggered");
    
  }
}
