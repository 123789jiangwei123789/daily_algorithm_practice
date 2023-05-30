function twoSum(nums: number[], target: number): number[] {
  //   let indexArr: number[] = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] + nums[i] === target) {
  //         indexArr.push(i);
  //         indexArr.push(j);
  //       }
  //     }
  //   }
  //   indexArr = Array.from(new Set(indexArr));
  //   return indexArr;
  let indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (indexMap.has(x)) {
      return [indexMap.get(x), i];
    }
    indexMap.set(nums[i], i);
  }
}
console.log(twoSum([3, 3], 6));
/**1、查找表法
（1）哈希表
(2)平衡二叉树
*/
