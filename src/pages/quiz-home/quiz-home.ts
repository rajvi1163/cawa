import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { QuizPlayerPage } from '../quiz-player/quiz-player';
/*
  Generated class for the QuizHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quiz-home',
  templateUrl: 'quiz-home.html'
})
export class QuizHomePage {
  public isHomePage = false;
  public allQuizData:any;
  public totalQuizQuestions:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
     this.http.get('assets/data/acts/quiz.json').map(res => res.json().quiz).subscribe(data => {
      console.log(data);
      this.allQuizData=data;
      // this.currentQuestion=this.allQuizData[0];
      // fillups.innerHTML=data.titles[0];
      for (let q of this.allQuizData) {
    this.totalQuizQuestions= this.totalQuizQuestions+1;
}
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizHomePage');
  }
  gotoQuizPlayer(){
    this.navCtrl.push(QuizPlayerPage,this.allQuizData);
    console.log("trigerred quizPlayer button");
  }
  
}
