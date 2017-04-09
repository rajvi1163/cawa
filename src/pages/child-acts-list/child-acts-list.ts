import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {ChildActDetailPage} from '../child-act-detail/child-act-detail';

// import { sharedVar } from '../home/home';
/*
  Generated class for the ChildActsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-child-acts-list',
  templateUrl: 'child-acts-list.html'
})
export class ChildActsListPage {
  public isHomePage = false;
  public response: any;
  public allActs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.http.get('assets/data/acts/acts.json').map(res => res.json().Acts).subscribe(data => {
      console.log(data);
      this.response=data;
      this.allActs=this.response;
      console.log(this.response[0].title);
      // fillups.innerHTML=data.titles[0];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildActsListPage');
  }
  displayActDetails(parameter:any){
    console.log("displayActDetails Triggered "+parameter.title);
    this.navCtrl.push(ChildActDetailPage,parameter);
  }
  getItems(event:any){

    //reset data
    this.response=this.allActs;
    
    let ev = event.target.value;
    console.log(ev);

    if(ev && ev.trim() != '')
    {
      this.response = this.response.filter((act) => {
        return (act.title.toLowerCase().indexOf(ev.toLowerCase()) !== -1);
      });
      console.log(this.response);
      for( let a of this.response){
        console.log(a.title.indexOf(ev) !== -1);
      }
    }
  }

  onCancelSearch(ev:any){
    console.log("Cancel search triggeed "+ev.toString());
  }

}
