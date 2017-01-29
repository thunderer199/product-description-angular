import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {IProduct} from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: IProduct;
  @Output() public onSelect: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  select(product: IProduct) {
    if (this.onSelect) {
      this.onSelect.emit(product);
    }
  }

}
