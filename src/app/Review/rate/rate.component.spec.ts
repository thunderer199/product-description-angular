/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RateComponent} from './rate.component';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RateComponent],
      providers: [{provide: 'currentRate', useValue: 3}]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render all starts', async(() => {
    const startsCount = 6;
    component.maxRate = startsCount;

    component.ngOnChanges();
    fixture.detectChanges();

    const elemNode = fixture.nativeElement;
    expect(elemNode.querySelector('.rate-stars').childElementCount).toBe(startsCount);
  }));

  it('shouldn\'t set rating for readonly', async(() => {
    const startsCount = 6;
    const originalRate = component.currentRate;
    component.maxRate = startsCount;
    component.setRate(startsCount);

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentRate).toBe(originalRate);
  }));

  it('should set rating when readonly is false', async(() => {
    const startsCount = 6;
    component.readonly = false;
    component.maxRate = startsCount;
    component.setRate(startsCount);

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentRate).toBe(startsCount);
  }));

  it('should set rating when readonly is false', async(() => {
    const startsCount = 6;
    component.readonly = false;
    component.maxRate = startsCount;
    component.setRate(startsCount);

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentRate).toBe(startsCount);
  }));


  it('should it\'s value stay in valid range, maximal value', async(() => {
    const startsCount = 6;
    component.readonly = false;
    component.setRate(startsCount);

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentRate).toBe(5);
  }));

  it('should it\'s value stay in valid range, minimal value', async(() => {
    const startsCount = -6;
    component.readonly = false;
    component.setRate(startsCount);

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentRate).toBe(1);
  }));
});
