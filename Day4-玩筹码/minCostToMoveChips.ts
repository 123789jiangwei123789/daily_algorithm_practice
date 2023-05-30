function minCostToMoveChips(position: number[]): number {
  let odd = position.reduce((prev, cur) => prev + (cur % 2), 0);
  return Math.min(odd, position.length - odd);
}
