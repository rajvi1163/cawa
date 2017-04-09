import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ViewChild} from '@angular/core';
import { Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { QuizHomePage } from '../pages/quiz-home/quiz-home';
import { AboutVisionArrayPage } from '../pages/about-vision-array/about-vision-array';
import { OpenSourceLibrariesPage } from '../pages/open-source-libraries/open-source-libraries';
import { ReferencesPage } from '../pages/references/references';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;

 public pages: Array<{title: string, component: any}>;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.show();
    });
  }
  openPages(p:any){
    console.log("Triggerd the Option Button");
    this.nav.setRoot(p.component);
  }
}
