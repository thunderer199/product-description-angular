import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {IReview} from './Review';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ReviewService} from './review.service';

@Injectable()
export class ReviewsByProductResolver implements Resolve<IReview[]> {

  constructor(protected service: ReviewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReview[]> {
    const params: any = route.params;
    return this.service.getReviewForProduct(params.id);
  }
}
