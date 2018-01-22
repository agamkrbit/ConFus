import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { baseURL } from '../../shared/baseurl';
import { Leader } from '../../shared/leader';
import { ProcessHttpmsgProvider } from '../../providers/process-httpmsg/process-httpmsg';;

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: Http, 
              private processHttpmsgService : ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }

  getLeaders() : Observable<Leader[]>{
    return this.http.get(baseURL + 'Leaders').map(res => {
      return this.processHttpmsgService.extractData(res);
    }).catch(error => {
      return this.processHttpmsgService.handleError(error);
    });
  }

  getLeader(id : number) : Observable<Leader>{
    return this.http.get(baseURL + 'Leaders/' + id).map(res => {
      return this.processHttpmsgService.extractData(res);
    }).catch(error => {
      return this.processHttpmsgService.handleError(error);
    });
  }

  getFeaturedLeader() : Observable<Leader>{
    return this.http.get(baseURL + 'Leaders?featured=true').map(res => {
      return this.processHttpmsgService.extractData(res)[0];
    }).catch(error => {
      return this.processHttpmsgService.handleError(error);
    });
  }

}
