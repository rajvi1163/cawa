import { Component,ViewChild,ViewChildDecorator } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GameFinishScorePage } from '../game-finish-score/game-finish-score';
/*
  Generated class for the QuizPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quiz-player',
  templateUrl: 'quiz-player.html'
})
export class QuizPlayerPage {
  public isHomePage = false;
  public currentQuestion:any;
  public totalQuizQuestions = 0;
  public allQuizQuestions:any;
  public currentQuestionIndex:any;
  public currentQuestionNumber = 1;
  public originalButtonBackground:any;
  public originalButtonClassName:any;
  public isSkipQuestionButtonDisabled:boolean;
  public highScore = 0;
  public currentScore = 0;
  public attemptedAnyQuestion:boolean;
  public isQuizOptionDisabled: boolean;
  public isNextQuestionButtonDisabled:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    // this.allQuizQuestions = this.navParams.data;
    // this.currentQuestion = this.allQuizQuestions;
    // console.log(this.allQuizQuestions);\
    this.attemptedAnyQuestion = false;
    this.originalButtonBackground = null;
    this.originalButtonClassName= null;
    this.isSkipQuestionButtonDisabled = false;
    this.isNextQuestionButtonDisabled = true;
    console.log("original data :- "+this.originalButtonBackground + this.originalButtonClassName);
    console.log(this.navParams);
    //this.isQuizOptionDisabled = false;
    this.allQuizQuestions = this.navParams.data;
    for (let q of this.allQuizQuestions) {
    this.totalQuizQuestions= this.totalQuizQuestions+1;}
    this.currentQuestion = this.allQuizQuestions[0];
    console.log(this.currentQuestion);
    console.log(this.currentQuestionNumber);
    console.log(this.totalQuizQuestions);
    this.currentQuestionIndex=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPlayerPage');
  }
  registerAnswer(choice:any,buttonName: any, otherButton:any, otherButton2:any, otherButton3:any)
  {
    this.attemptedAnyQuestion = true;
    this.originalButtonBackground = buttonName._elementRef.nativeElement.style.backgroundColor;
    this.originalButtonClassName = buttonName._elementRef.nativeElement.className;
    console.log(choice);
    //console.log(buttonName.innerHTML);
    console.log(buttonName);
    console.log(buttonName._elementRef.nativeElement.innerText);
    console.log(buttonName._elementRef.nativeElement.textContent);
    //this.isQuizOptionDisabled = true;
    if(choice==this.currentQuestion.answer)
    {
      console.log("correct answer");
      buttonName._elementRef.nativeElement.style.backgroundColor = 'green';
      buttonName._elementRef.nativeElement.className += ' correctAns';
      this.currentScore += 1;
    }
    else{
    console.log("wrong answer");
    buttonName._elementRef.nativeElement.style.backgroundColor = 'red';
    buttonName._elementRef.nativeElement.className += ' wrongAns';
  }
  otherButton._elementRef.nativeElement.disabled = true;
  otherButton2._elementRef.nativeElement.disabled = true;
  otherButton3._elementRef.nativeElement.disabled = true;
  //otherButton._elementRef.nativeElement.disabled = true;
  this.isSkipQuestionButtonDisabled = true;
  this.isNextQuestionButtonDisabled = false;
  }
  skipQuestion(button1:any,button2:any,button3:any,button4:any)
  {
    if(this.attemptedAnyQuestion){
    //for button1 
    button1._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button1._elementRef.nativeElement.className = this.originalButtonClassName;
    button1._elementRef.nativeElement.disabled = false;

    //for button2 
    button2._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button2._elementRef.nativeElement.className = this.originalButtonClassName;
    button2._elementRef.nativeElement.disabled = false;

    //for button3 
    button3._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button3._elementRef.nativeElement.className = this.originalButtonClassName;
    button3._elementRef.nativeElement.disabled = false;

    //for button4
    button4._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button4._elementRef.nativeElement.className = this.originalButtonClassName;
    button4._elementRef.nativeElement.disabled = false;
    }
    this.isSkipQuestionButtonDisabled = false;

    console.log("Skip Question");
    this.skipQuestionConfirmation(button1,button2,button3,button4);
  }

  //skip Question Confirmation
   skipQuestionConfirmation(button1:any,button2:any,button3:any,button4:any) {
    let confirm = this.alertCtrl.create({
      title: 'Skip Question',
      message: 'Are you Sure to SKip this Question ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes Selected');
            if (this.currentQuestionIndex < this.totalQuizQuestions)
    this.currentQuestionIndex=this.currentQuestionIndex+1;
    this.currentQuestion=this.allQuizQuestions[this.currentQuestionIndex];
    this.currentQuestionNumber=this.currentQuestionNumber+1;
          }
        },
        {
          text: 'Show Answer & Skip',
          handler: () => {
            console.log('Show Answer clicked');
            if(button1._elementRef.nativeElement.textContent == this.currentQuestion.answer)
            {
              button1._elementRef.nativeElement.style.backgroundColor = 'green';
              button1._elementRef.nativeElement.className += ' correctAns';
            }
            else if(button2._elementRef.nativeElement.textContent == this.currentQuestion.answer)
            {
              button2._elementRef.nativeElement.style.backgroundColor = 'green';
              button2._elementRef.nativeElement.className += ' correctAns';
            }
            else if(button3._elementRef.nativeElement.textContent == this.currentQuestion.answer)
            {
              button3._elementRef.nativeElement.style.backgroundColor = 'green';
              button3._elementRef.nativeElement.className += ' correctAns';
            }
            else if(button4._elementRef.nativeElement.textContent == this.currentQuestion.answer)
            {
              button4._elementRef.nativeElement.style.backgroundColor = 'green';
              button4._elementRef.nativeElement.className += ' correctAns';
            }
            this.showAnswer(button1,button2,button3,button4);
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  //show answer to the user
  showAnswer(button1:any,button2:any,button3:any,button4:any){
    let answer = this.alertCtrl.create({
      title: 'Answer',
      message: 'Correct Answer is: '+this.currentQuestion.answer,
      buttons: [
        {
          text: 'Got It!',
          handler: () => {
            console.log('Got It clicked');
            if (this.currentQuestionIndex < this.totalQuizQuestions)
    this.currentQuestionIndex=this.currentQuestionIndex+1;
    this.currentQuestion=this.allQuizQuestions[this.currentQuestionIndex];
    this.currentQuestionNumber=this.currentQuestionNumber+1;

    if(this.attemptedAnyQuestion){
    //for button1 
    button1._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button1._elementRef.nativeElement.className = this.originalButtonClassName;
    button1._elementRef.nativeElement.disabled = false;

    //for button2 
    button2._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button2._elementRef.nativeElement.className = this.originalButtonClassName;
    button2._elementRef.nativeElement.disabled = false;

    //for button3 
    button3._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button3._elementRef.nativeElement.className = this.originalButtonClassName;
    button3._elementRef.nativeElement.disabled = false;

    //for button4
    button4._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button4._elementRef.nativeElement.className = this.originalButtonClassName;
    button4._elementRef.nativeElement.disabled = false;
    }
    this.isSkipQuestionButtonDisabled = false;
          }
        }
      ]
    });
    answer.present();
  }
  
  showNextQuestion(button1:any,button2:any,button3:any,button4:any){
    if(this.attemptedAnyQuestion){
    //for button1 
    button1._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button1._elementRef.nativeElement.className = this.originalButtonClassName;
    button1._elementRef.nativeElement.disabled = false;

    //for button2 
    button2._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button2._elementRef.nativeElement.className = this.originalButtonClassName;
    button2._elementRef.nativeElement.disabled = false;

    //for button3 
    button3._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button3._elementRef.nativeElement.className = this.originalButtonClassName;
    button3._elementRef.nativeElement.disabled = false;

    //for button4
    button4._elementRef.nativeElement.style.backgroundColor = this.originalButtonBackground;
    button4._elementRef.nativeElement.className = this.originalButtonClassName;
    button4._elementRef.nativeElement.disabled = false;
    }

    if (this.currentQuestionIndex < this.totalQuizQuestions)
    this.currentQuestionIndex=this.currentQuestionIndex+1;
    this.currentQuestion=this.allQuizQuestions[this.currentQuestionIndex];
    this.currentQuestionNumber=this.currentQuestionNumber+1;
    this.isNextQuestionButtonDisabled = true;
    this.isSkipQuestionButtonDisabled = false;
  }
  finishGame(){
    console.log("finish game");
   this.navCtrl.push(GameFinishScorePage,this.currentScore);
  }
  

}
