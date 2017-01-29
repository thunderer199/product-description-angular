import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AuthModule} from './User/auth.module';
import {AppConfig} from './app.config';
import {HeaderComponent} from './Site/header/header.component';
import {FooterComponent} from './Site/footer/footer.component';
import {ProductItemComponent} from './Products/product-item/product-item.component';
import {PaginatorComponent} from './Helpers/paginator/paginator.component';
import {ReviewComponent} from './Review/review/review.component';
import {RateComponent} from './Review/rate/rate.component';
import {ReviewComposeComponent} from './Review/review-compose/review-compose.component';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './Site/product-list/product-list.component';
import {ProductResolver} from './Products/ProductResolver';
import {ProductService} from './Products/product.service';
import {ProductSingleComponent} from './Site/product-single/product-single.component';
import {ReviewService} from './Review/review.service';
import {ReviewsByProductResolver} from './Review/ReviewsByProductResolver';

export function configFactory(config: AppConfig) {
  return config.load();
}

const routes: Routes = [
  {
    path: 'product/:id', component: ProductSingleComponent,
    resolve: {
      product: ProductResolver, reviewsForProduct: ReviewsByProductResolver
    }
  },
  {path: '', component: ProductListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    PaginatorComponent,
    ReviewComponent,
    RateComponent,
    ReviewComposeComponent,
    ProductListComponent,
    ProductSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  providers: [
    AppConfig,
    {provide: APP_INITIALIZER, useFactory: configFactory, deps: [AppConfig]},
    ProductResolver,
    ProductService,
    ReviewService,
    ReviewsByProductResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
