import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CaseDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-case-details',
  templateUrl: 'case-details.html'
})
export class CaseDetailsPage {
  public isHomePage = false;
  public case: any;
  public caseArrayString: String;
  public caseArray: any;
    public isNightMode:boolean;
  public customCSS:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.case = this.navParams.data;
    this.isNightMode = false;
    this.caseArrayString = this.case.story;
    this.caseArray = this.caseArrayString.split(' -');
    console.log(this.case);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseDetailsPage');
  }

  toggleFakeNightMode(){
    console.log('toggle night ChildActDetailPage');
this.isNightMode = !this.isNightMode;
console.log(this.isNightMode);
if(this.isNightMode){
this.customCSS = "background:black !important;color:white !important;";
}
else
this.customCSS = "";
  }
  

}
