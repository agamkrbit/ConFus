import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage implements OnInit{
  leaders: Leader[];
  errMsg : string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private leaderService: LeaderProvider,
              @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

  ngOnInit(){
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders, 
      error => this.errMsg = error
      );
  }

}
