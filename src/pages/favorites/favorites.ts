import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite'

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  favorites: Dish[];
  errMsg : string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private favoriteService : FavoriteProvider,
              private dishService: DishProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ngOnInit(){
    this.dishService.getDishes().subscribe(dishes => {
      this.favorites =  dishes.filter(dish => {return this.favoriteService.isFavourite(dish.id)})
    },
    error => this.errMsg = error);
  }

}
