import {Component, OnInit, Input} from '@angular/core';
import {IReview} from '../Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;
  @Input() maxRate: number = 5;

  constructor() {
  }

  ngOnInit(): void {
  }
}
