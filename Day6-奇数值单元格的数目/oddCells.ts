function oddCells(m: number, n: number, indices: number[][]): number {
  let column: Array<number> = [],
    originList: Array<Array<number>> = [];
  for (let i = 0; i < n; i++) {
    column.push(0);
  }
  for (let j = 0; j < m; j++) {
    originList.push([...column]);
  }
  for (let i = 0; i < indices.length; i++) {
    originList[indices[i][0]] = originList[indices[i][0]].map((row) => {
      return (row += 1);
    });
    originList = originList.map((column) => {
      if (column[indices[i][1]] >= 0) {
        column[indices[i][1]] += 1;
      }
      return column;
    });
  }
  return isJudgeOdd(originList);
}
function isJudgeOdd(list): number {
  let newArr = list.reduce((pre, cur) => {
    return pre.concat(cur);
  }, []);
  return newArr.reduce((prev, cur) => prev + (cur % 2), 0);
}
console.log(
  oddCells(3, 3, [
    [0, 1],
    [1, 1],
  ])
);
// var oddCells = function(m, n, indices) {
//   const rows = new Array(m).fill(0);
//   const cols = new Array(n).fill(0);
//   for (const index of indices) {
//       rows[index[0]]++;
//       cols[index[1]]++;
//   }
//   let oddx = 0, oddy = 0;
//   for (let i = 0; i < m; i++) {
//       if ((rows[i] & 1) !== 0) {
//           oddx++;
//       }
//   }
//   for (let i = 0; i < n; i++) {
//       if ((cols[i] & 1) !== 0) {
//           oddy++;
//       }
//   }
//   return oddx * (n - oddy) + (m - oddx) * oddy;
// };
