import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dish: Dish;
  leader: Leader;
  promotion: Promotion;
  dishErrMess : string;
  leaderErrMess: string;
  promoErrMess: string;

  constructor(public navCtrl: NavController,
              private dishProvider: DishProvider,
              private promotionProvider: PromotionProvider,
              private leaderProvider: LeaderProvider,
             @Inject('BaseURL') private BaseURL) {

  }

  ngOnInit(){
    this.dishProvider.getFeaturedDish().subscribe(dish => { this.dish = dish},
      error => { this.dishErrMess = error});
    this.leaderProvider.getFeaturedLeader().subscribe(leader => { this.leader = leader},
        error => { this.leaderErrMess = error});
    this.promotionProvider.getFeaturedPromotion().subscribe(promo => { this.promotion = promo},
          error => { this.promoErrMess = error});
  }

}
