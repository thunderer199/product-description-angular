/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {ProductService} from './product.service';
import {AppConfig} from '../app.config';
import {HttpModule} from '@angular/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, AppConfig, HttpModule]
    });
  });
});
