import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { NewsArticlePage } from '../news-article/news-article';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the NewsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news-page',
  templateUrl: 'news-page.html'
})
export class NewsPagePage {
  public isHomePage = false;
  public response: any;
  public response2: any;
  public allTechCrunchNewsData: any;
  public allGoogleNewsData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Fetching News From Google...",
      duration: 5000
    });
    loader.present();
    this.http.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4c63d3fc727f42118423bcd1e66e2586').map(res => res.json().articles).subscribe(data => {
      console.log(data);
      this.response=data;
      this.allTechCrunchNewsData=this.response;
      //next request;
    
    });
    //   this.http.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4c63d3fc727f42118423bcd1e66e2586').map(res => res.json().articles).subscribe(data => {
    //   console.log(data);
    //   this.response2=data;
    //   this.allGoogleNewsData=this.response2;
    //   console.log(this.response[0].title);
    //   console.log(this.allGoogleNewsData);
      
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPagePage');
  }
  displayNews(parameter:any){
    console.log("displayCase Triggered with news "+parameter.name);
    this.navCtrl.push(NewsArticlePage,parameter);
  }

}
