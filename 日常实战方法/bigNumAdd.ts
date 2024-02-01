/** 大数相加 */
// 众所周知，js的整数区间是在-2^53 + 1 ~ 2^53 - 1之间，不在这个范围就会出现精度丢失的问题，那么有这种需求怎么办呢

/**假设题目是这样 有两个数num1 = 10 和 num2 = 9007199254740991
 * 求他们的和
 * */

/**方案一 最简单的方法就是使用es2020提供的BigInt方法 */
// const bigNumAdd = (num1: string, num2: string) => {
//   if (toString.call(num1) === '[object String]' && toString.call(num2) === '[object String]') {
//     return (BigInt(num1) + BigInt(num2)).toString();
//   }
//   return 0;
// };

/**方案二 */
const bigNumAdd = (num1: string, num2: string) => {
  if (
    Object.prototype.toString.call(num1) === '[object String]' &&
    Object.prototype.toString.call(num2) === '[object String]'
  ) {
    let maxLen = Math.max(num1.length, num2.length);
    if (num1.length > num2.length) {
      num2 = num2.padStart(maxLen, '0');
    } else if (num1.length < num2.length) {
      num1 = num1.padStart(maxLen, '0');
    }
    let result: number[] = [],
      carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      let sum = Number(num1[i]) + Number(num2[i]) + carry;
      if (sum >= 10) {
        result.unshift(sum - 10);
        carry = 1;
      } else {
        result.unshift(sum);
        carry = 0;
      }
    }
    if (carry === 1) {
      result.unshift(1);
    }
    return result.join('');
  }
  return 0;
};
console.log(bigNumAdd('10', '9007199254740991'));
