import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NewsArticle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news-article',
  templateUrl: 'news-article.html'
})
export class NewsArticlePage {
  public newsArticle:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newsArticle = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsArticlePage');
  }

}
