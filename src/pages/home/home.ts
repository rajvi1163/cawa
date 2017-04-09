import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChildActsListPage } from "../child-acts-list/child-acts-list";
import { CaseStudiesListPage } from "../case-studies-list/case-studies-list";
import { QuizHomePage } from "../quiz-home/quiz-home";
//import { StakeHoldersListPage } from '../stake-holders-list/stake-holders-list';
// import { QuizPlayerPage } from '../quiz-player/quiz-player';
import { Http } from '@angular/http';
import { Splashscreen } from 'ionic-native';
import { NewsPagePage } from '../news-page/news-page';
import { StakeholderNGOPage } from '../stakeholder-ngo/stakeholder-ngo';
import { AckPage } from '../ack/ack';
import { ReportPage} from '../report/report';

import { ModalController } from 'ionic-angular';
import { ModalPage1Page } from '../modal-page1/modal-page1';
import { AboutNCPCRPage} from '../about-ncpcr/about-ncpcr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  caseStudiesList= CaseStudiesListPage;
  quizHome= QuizHomePage;
  stakeholdersList= StakeholderNGOPage;
  childActsList= ChildActsListPage;
  newsHome = NewsPagePage;
  stakeholderNGO = StakeholderNGOPage;
  ack = AckPage;
  rep = ReportPage;
  abtncpcr = AboutNCPCRPage;
  public showGridMenu:boolean;
  public isHomePage = true;
  // quizPlayer = QuizPlayerPage;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
    this.showGridMenu = true;
    this.isHomePage = true;
    this.showAlert();
    
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Version',
      subTitle: 'Pre-Alpha. Neither UI nor UX is final',
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad(){
    Splashscreen.hide();
  }
  toggleMenuView(){
    this.showGridMenu = !this.showGridMenu;
  }
  presentModal() {
    let modal = this.modalCtrl.create(ModalPage1Page);
    modal.present();
  }


}