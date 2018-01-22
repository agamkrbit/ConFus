import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage implements OnInit{
  dish: Dish;
  errMsg : string;
  avgStar: string;
  numComments: number;
  favorite: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              @Inject('BaseURL') private BaseURL,
              private favouriteService : FavoriteProvider) {
    this.dish = this.navParams.get('dish')
    let total = 0;
    this.numComments = this.dish.comments.length;
    this.dish.comments.forEach(element => {
      total += element.rating;
    });
    this.avgStar = (total/this.numComments).toFixed(2);
    this.favorite = this.favouriteService.isFavourite(this.dish.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  ngOnInit(){
  }

  addFavorite(){
    this.favouriteService.addFavourite(this.dish.id);
    this.favorite = true;
  }
}
