import {Injectable, OnInit} from '@angular/core';
import {AppConfig} from '../app.config';
import {Http} from '@angular/http';
import {IProduct} from './product';
import {Observable} from 'rxjs';


@Injectable()
export class ProductService implements OnInit {

  constructor(protected config: AppConfig, protected http: Http) {
  }


  ngOnInit(): void {
  }

  getProducts(): Observable<IProduct[]> {
    return this.config.getConfig('API_URL')
      .flatMap(url => this.http.get(url + '/api/products'))
      .map(r => r.json())
      .flatMap((resp) => Observable.forkJoin(resp.map(this.prepareImageSrc.bind(this))));
  }

  getProductsById(id: number): Observable<IProduct> {
    // since serve doesn't support get by id operation, need to get all products
    return this.getProducts()
      .flatMap(r => r)
      .filter(prod => {
        console.log(prod);
        return prod.id === id;
      })
      .first();
  }

  prepareImageSrc(product: IProduct): Observable<IProduct> {
    return this.config.getConfig('IMAGE_URL')
      .map(url => {
        product.img = `${url}/${product.img}`;
        return product;
      });
  }
}
