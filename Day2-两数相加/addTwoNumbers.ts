/**解题思路 */
//自解：两次循坏，第二个for循坏下标始终是第一个for下标+1，满足条件则push进结果数组，最后去重
//官解：(哈希表)一次循环，利用map，在map.set用目标值减去当前数组值作为key，当前下标作为value，如果在map里面找到当前值，则返回

/**自己实现 */
// function twoSum(nums: number[], target: number): number[] {
//   let resultArr: number[] = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         resultArr.push(i)
//         resultArr.push(j)
//       }
//     }
//   }
//   resultArr = [...new Set(resultArr)]
//   return resultArr
// };

/**官方实现 */
function twoSum(nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
  return []
};

/**运行用例 */
console.log(twoSum([2, 7, 11, 15, 5, 2], 9))

/**其他实现方法 */
// 利用双指针
// function twoSum(nums: number[], target: number): number[] {
//   const results = []
//   const numsWithIndex = nums
//     .map((num, index) => {
//       return {
//         value: num,
//         index,
//       }
//     }).sort((numOne, numTwo) => numOne.value - numTwo.value)
//   let left = 0
//   let right = numsWithIndex.length - 1
//   while (left < right) {
//     const sum = numsWithIndex[left].value + numsWithIndex[right].value
//     if (sum < target) {
//       left++
//     } else if (sum > target) {
//       right--
//     } else {
//       return [
//         Math.min(numsWithIndex[left].index, numsWithIndex[right].index),
//         Math.max(numsWithIndex[left].index, numsWithIndex[right].index)
//       ]
//     }
//   }
//   return []
// };
