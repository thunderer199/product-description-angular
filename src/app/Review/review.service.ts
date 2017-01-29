import {Injectable} from '@angular/core';
import {AppConfig} from '../app.config';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {IReview} from './Review';

@Injectable()
export class ReviewService {

  constructor(protected config: AppConfig, protected http: Http) { }

  getReviewForProduct(productId: number): Observable<IReview[]> {
    return this.config.getConfig('API_URL')
      .flatMap(url => this.http.get(url + `/api/reviews/${productId}`))
      .map(r => r.json())
      .map(r => this.prepareDate(r));
  }

  prepareDate(review: IReview[]): IReview[] {
    return (review || []).map((r: IReview) => {
      // return {...r, created_at: new Date(r.created_at)};
      r.created_at = new Date(Date.parse(<string>r.created_at));
      return r;
    });
  }
}
