import {Component, OnInit, Input} from '@angular/core';
import {IProduct} from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: IProduct;


  constructor() { }

  ngOnInit() {
  }

}
