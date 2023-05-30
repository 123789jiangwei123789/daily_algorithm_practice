/*
 * @Author: JiangWei
 * @Date: 2022-08-04 11:03:31
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-04 11:24:18
 * @describtion 选择排序
 */
/**原理：
 *首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置。
 *接着，再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾。
 *以此类推，直到所有元素均排序完毕。
 */
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
console.log(selectSort([4, 3, 6]));
