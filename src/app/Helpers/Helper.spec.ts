import {range} from './Helper';

describe('Helpers range', () => {
  it('should return valid array without start argument', () => {
    expect(range(2)).toEqual([0, 1]);
  });

  it('should return valid array with start argument', () => {
    expect(range(2, 2)).toEqual([2, 3]);
  });

  it('should return valid array with unvalid argument', () => {
    expect(range(NaN)).toEqual([2, 3]);
  });
});
