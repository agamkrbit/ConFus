import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Dish } from '../../shared/dish';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites : Array<any>;
  constructor(public http: Http) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addFavourite(id : number){
    this.favorites.push(id);
  }

  isFavourite(id : number){
    return this.favorites.some(el => el === id);
  }
}
