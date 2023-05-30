/*
 * @Author: JiangWei
 * @Date: 2022-08-04 09:21:03
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-04 09:33:57
 * @describtion 插入排序
 */
/**原理：
 * 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 */
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i;
        while (j > 0) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
            j--;
        }
        arr[j] = temp;
    }
}
console.log(insertSort([2, 1, 3, 2, 1, 4]));
