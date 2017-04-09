import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChildActsListPage } from '../pages/child-acts-list/child-acts-list';
import { CaseStudiesListPage } from '../pages/case-studies-list/case-studies-list';
import { StakeHoldersListPage } from '../pages/stake-holders-list/stake-holders-list';
import { QuizHomePage } from '../pages/quiz-home/quiz-home';
import { ChildActDetailPage } from '../pages/child-act-detail/child-act-detail';
import { CaseDetailsPage } from '../pages/case-details/case-details';
import { QuizPlayerPage } from '../pages/quiz-player/quiz-player';
import { GameFinishScorePage } from '../pages/game-finish-score/game-finish-score';
import { NewsPagePage } from '../pages/news-page/news-page';
import { StakeholderNGOPage } from '../pages/stakeholder-ngo/stakeholder-ngo';
import { AboutVisionArrayPage } from '../pages/about-vision-array/about-vision-array';
import { OpenSourceLibrariesPage } from '../pages/open-source-libraries/open-source-libraries';
import { ReferencesPage } from '../pages/references/references';
import { ReportPage} from '../pages/report/report';
import { AboutNCPCRPage} from'../pages/about-ncpcr/about-ncpcr';
import { AckPage } from '../pages/ack/ack';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChildActsListPage,
    CaseDetailsPage,
    CaseStudiesListPage,
    StakeHoldersListPage,
    QuizHomePage,
    QuizPlayerPage,
    ChildActDetailPage,
    GameFinishScorePage,
    NewsPagePage,
    StakeholderNGOPage,
    AboutVisionArrayPage,
    ReferencesPage,
    OpenSourceLibrariesPage,
    ReportPage,
    AboutNCPCRPage,
    AckPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StakeHoldersListPage,
    QuizHomePage,
    QuizPlayerPage,
    CaseDetailsPage,
    CaseStudiesListPage,
    ChildActsListPage,
    ChildActDetailPage,
    GameFinishScorePage,
    NewsPagePage,
    StakeholderNGOPage,
    AboutVisionArrayPage,
    ReferencesPage,
    OpenSourceLibrariesPage,
    ReportPage,
    AboutNCPCRPage,
    AckPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
