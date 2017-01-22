export function range(count: number, start: number = 0): number[] {
  return Array(count).fill(0).map((_, i) => i + start);
}
