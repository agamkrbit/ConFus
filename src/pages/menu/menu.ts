import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { DishdetailPage } from '../dishdetail/dishdetail'; 

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{
  dishes : Dish[];
  errMsg: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dishProvider: DishProvider,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(){
    this.dishProvider.getDishes().subscribe(dishes => this.dishes = dishes, 
      error => this.errMsg = error);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(dish: Dish){
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }

}
