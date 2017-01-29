import {Injectable} from '@angular/core';
import {AppConfig} from '../app.config';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {IReview} from './Review';
import {AuthService} from '../User/auth.service';

@Injectable()
export class ReviewService {

  constructor(protected config: AppConfig, protected http: Http, protected authService: AuthService) {
  }

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

  createReview(review: IReview, productId: number) {
    // as we have auth token in one place, will use here with out interceptor for all app
    const headers = new Headers();
    headers.append('Authorization', `Token ${this.authService.token}`);

    return this.config.getConfig('API_URL')
      .flatMap(url => this.http.post(url + `/api/reviews/${productId}`, review, {headers}))
      .map(r => r.json());
  }
}
