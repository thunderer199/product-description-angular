import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IReview} from '../Review';
import {ReviewService} from '../review.service';
import {NgForm} from '@angular/forms';
import {isBoolean} from 'util';

@Component({
  selector: 'app-review-compose',
  templateUrl: './review-compose.component.html',
  styleUrls: ['./review-compose.component.css']
})
export class ReviewComposeComponent implements OnInit {
  @Input() productId: number;
  @Output() reviewAdded: EventEmitter<boolean> = new EventEmitter<boolean>();
  private errorMessage: string;

  review: IReview = {
    rate: 1, text: ''
  };

  constructor(protected reviewService: ReviewService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.reviewService.createReview(form.value, this.productId)
        .subscribe(
           _ => this.reviewAdded.emit(true),
          err => this.errorMessage = err || 'Something go wrong!'
        )
      // can't recreate service adding of review, bc API doesn't provide data about current user
    }

  }


}
