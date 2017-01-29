import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../Products/product';
import {AppConfig} from '../../app.config';
import {ProductService} from '../../Products/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  navigate: Function;

  constructor(protected productsService: ProductService, protected config: AppConfig, protected router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((resp: IProduct[]) => {
        this.products = resp;
      });

    this.navigate = (product: IProduct) => {
      this.router.navigate(['product', product.id]);
    };
  }

}
