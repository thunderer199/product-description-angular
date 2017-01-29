/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReviewComponent} from './review.component';
import {RateComponent} from '../rate/rate.component';

describe('ReviewComponent', () => {
  const review = {rate: 1, text: 'Not so good', created_by: {username: 'Me'}};
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent, RateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;

    component.review = review;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rendering data right', () => {
    const native = fixture.nativeElement;
    expect(native.querySelector('.text').innerText.trim()).toBe(review.text.trim());
    expect(native.querySelector('.panel-heading > .pull-left').innerText.trim()).toBe(`Author: ${review.created_by.username.trim()}`);
  });
});
