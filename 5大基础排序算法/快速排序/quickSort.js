/*
 * @Author: JiangWei
 * @Date: 2022-08-03 10:52:16
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-04 09:24:12
 * @describtion 快速排序splice
 */
/**原理：
 * 通过一趟排序将要排序的数据分割成独立的两部分，
 * 其中一部分的所有数据都比另外一部分的所有数据都要小，
 * 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，
 * 以此达到整个数据变成有序序列。
 */
function quickSort1(arr) {
    const len = arr.length;
    if (len == 0) return arr;
    const midIndex = Math.floor(len / 2); //中间索引
    const midValue = arr.splice(midIndex, 1)[0];
    const left = [],
        right = [];
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if (n < midValue) {
            left.push(n);
        } else {
            right.push(n);
        }
    }
    return quickSort1(left).concat([midValue], quickSort1(right));
}
console.log(quickSort1([2, 2, 4, 1, 3]));
