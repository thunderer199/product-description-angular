/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductItemComponent} from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  const product = {
    id: 1,
    title: 'Some prod 1',
    img: 'https://wallpaperscraft.com/image/google_classic_old_art_logo_4687_3840x2400.jpg',
    text: 'Some text'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rendered model right', () => {
    const domElement = fixture.nativeElement;

    expect(domElement.querySelector('.panel-heading').innerText.trim()).toBe(product.title.trim());
    expect(domElement.querySelector('.img-thumbnail').src).toBe(product.img);
    expect(domElement.querySelector('.main-text').innerText.trim()).toBe(product.text.trim());
  });
});
