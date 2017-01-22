import {Component, Input, OnChanges, Output, EventEmitter, forwardRef} from '@angular/core';
import {range} from '../../Helpers/Helper';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RateComponent),
  multi: true
};

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RateComponent implements OnChanges, ControlValueAccessor {
  @Input() currentRate: number;
  @Input() maxRate: number = 5;
  @Input() showText: boolean = false;
  @Input() readonly: boolean = true;

  @Output() rateChange: EventEmitter<number> = new EventEmitter();

  protected stars: number[] = [];

  private onModelChange: Function = () => {
  };
  private onTouchChange: Function = () => {
  };

  constructor() {
  }

  ngOnChanges() {
    this.stars = range(this.maxRate, 1);
  }

  setRate(rate: number) {
    if (!this.readonly) {
      this.writeValue(rate);
      this.onTouchChange(rate);
      this.rateChange.emit(rate);
      this.onModelChange(rate);
    }
  }

  public writeValue(obj: number): void {
    // set unvalid rate to valid range
    if (obj < 1) {
      obj = 1;
    }

    if (obj > this.maxRate) {
      obj = this.maxRate;
    }

    this.currentRate = obj;
  }

  public registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouchChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }
}
