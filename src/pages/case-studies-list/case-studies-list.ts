import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CaseDetailsPage } from '../case-details/case-details';
/*
  Generated class for the CaseStudiesList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-case-studies-list',
  templateUrl: 'case-studies-list.html'
})
export class CaseStudiesListPage {
  public isHomePage = false;
  public response: any;
  public allCaseStudies: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('assets/data/acts/casestudy.json').map(res => res.json().Cases).subscribe(data => {
      console.log(data);
      this.response=data;
      this.allCaseStudies=this.response;
      console.log(this.response[0].title);
      // fillups.innerHTML=data.titles[0];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseStudiesListPage');
  }
  displayCase(parameter:any){
    console.log("displayCase Triggered with case "+parameter.name);
    this.navCtrl.push(CaseDetailsPage,parameter);
  }

}
