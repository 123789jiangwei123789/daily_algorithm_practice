/*
 * @Author: JiangWei
 * @Date: 2022-08-04 09:53:27
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-04 10:50:20
 * @describtion 归并排序
 */
/**原理：
 * 分割：将待排序的线性表不断地切分成若干个子表，直到每个子表只包含一个元素，
 * 这时，可以认为只包含一个元素的子表是有序表。
 * 归并：将子表两两合并，每合并一次，就会产生一个新的且更长的有序表，重复这一步骤，
 * 直到最后只剩下一个子表，这个子表就是排好序的线性表。
 */
function mergeSort(arr) {
    if (arr.length == 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left[0]);
            left.shift();
        } else {
            res.push(right[0]);
            right.shift();
        }
    }
    if (left.length) {
        res = res.concat(left);
    } else {
        res = res.concat(right);
    }
    return res;
}
console.log(mergeSort([2, 2, 1]));
