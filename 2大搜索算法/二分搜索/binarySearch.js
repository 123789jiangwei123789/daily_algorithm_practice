/*
 * @Author: JiangWei
 * @Date: 2022-08-08 09:22:40
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-08 09:35:16
 * @Describtion: 二分查找(可循环，可递归)
 */
/**原理：
 * 一种在有序数组中查找特定元素的搜索算法。所以是用二分查找的前提是数组必须是有序的.
 */
/**循环 */
function binarySearch(arr, target) {
    const len = arr.length;
    if (len == 0) return -1;
    let startIndex = 0;
    let endIndex = len - 1;
    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];
        if (target < midValue) {
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            startIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}
/**递归 */
function binarySearch02(arr, target, startIndex, endIndex) {
    const length = arr.length;
    if (length === 0) return -1;

    // 开始和结束的范围
    if (startIndex == null) startIndex = 0;
    if (endIndex == null) endIndex = length - 1;

    // 如果 start 和 end 相遇则结束
    if (startIndex > endIndex) return -1;

    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
        // 目标值较小，则继续在左侧查找
        return binarySearch02(arr, target, startIndex, midIndex - 1);
    } else if (target > midValue) {
        // 目标值较大，则继续在右侧查找
        return binarySearch02(arr, target, midIndex + 1, endIndex);
    } else {
        // 相等，返回
        return midIndex;
    }
}
