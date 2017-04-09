import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// for popover which didn't work out due to some bug in ionic 2
import { ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
 //import { TextToSpeech } from '@ionic-native/text-to-speech';
 import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-child-act-detail',
  templateUrl: 'child-act-detail.html'
})
export class ChildActDetailPage {
 
  public isHomePage = false;
  public act:any;
  public punishments:String;
  public punishmentsStrings:any;
  public isNightMode:boolean;
  public customCSS:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController) {
  
    this.act=this.navParams.data;
    this.isNightMode = false;
    this.punishments = this.act.punishments;
    console.log(this.punishments);
    this.punishmentsStrings = this.punishments.split(' -');
    console.log(this.punishments.split('-'));
  }
    // presentPopover(ev) {

    // let popover = this.popoverCtrl.create(PopoverPage, {
    //   contentEle: this.content.nativeElement,
    //   textEle: this.text.nativeElement
    // });

    // popover.present({
    //   ev: ev
    // });


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildActDetailPage');
    console.log(this.navParams);
  }

readActDescription(){
 console.log("test code");  
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
