/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReviewComposeComponent} from './review-compose.component';

describe('ReviewComposeComponent', () => {
  let component: ReviewComposeComponent;
  let fixture: ComponentFixture<ReviewComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
