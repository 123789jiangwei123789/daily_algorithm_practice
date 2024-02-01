/** 浮点数相加 */
// 众所周知，因为js运算都是先转化二进制，在进行计算
// js中的Number类型遵循IEEE754标准，在IEEE754标准的64位浮点数相加，因为浮点数自身小数位数的限制而截断的二进制在转化为十进制，只会取前17位, 在计算时会产生误差那么有这种需求怎么办呢

/**假设题目是这样 有两个数num1 = 0.1 和 num2 = 0.2
 * 求他们的和
 * */

const floatingNumAdd = (num1: number, num2: number) => {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') return;
  let t1 = num1.toString().split('.')?.[1]?.length || 0;
  let t2 = num2.toString().split('.')?.[1]?.length || 0;
  const m = Math.pow(10, Math.max(t1, t2));
  return (num1 * m + num2 * m) / m;
};
console.log(floatingNumAdd(1.23, 2));
