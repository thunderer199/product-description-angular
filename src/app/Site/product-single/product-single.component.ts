import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {IProduct} from '../../Products/product';
import {ActivatedRoute} from '@angular/router';
import {IReview} from '../../Review/Review';
import {AuthService} from '../../User/auth.service';
import {ReviewService} from '../../Review/review.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  public isLoggedIn: Function;
  protected product: IProduct;
  private reviews: IReview[];

  constructor(protected authService: AuthService, private route: ActivatedRoute, private reviewServie: ReviewService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserLoggedIn.bind(this.authService);

    this.product = this.route.snapshot.data['product'];
    // remove it with resolve if won't use it elsewhere
    this.setReviews(this.route.snapshot.data['reviewsForProduct']);
  }

  onUpdate() {
    this.reviewServie.getReviewForProduct(this.product.id)
      .subscribe(reviews => {
        this.setReviews(reviews);
      });
  }

  protected setReviews(reviews: IReview[] = []) {
    this.reviews = reviews.sort((a: IReview, b: IReview) => {
      if (b == null) {
        return -1;
      }
      if (a == null) {
        return 1;
      }

      return (+b.created_at) - (+a.created_at);
    });
  }
}
