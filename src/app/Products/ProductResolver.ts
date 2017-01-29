import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

  constructor(private service: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getProductsById(+route.params['id']);
  }
}
