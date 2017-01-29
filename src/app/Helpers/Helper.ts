export function range(count: number, start: number = 0): number[] {
  if (+count === count && count > 0) {
    return Array(count).fill(0).map((_, i) => i + start);
  } else {
    return [];
  }
}
