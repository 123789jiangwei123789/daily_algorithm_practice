/*
 * @Author: JiangWei
 * @Date: 2022-08-08 09:13:24
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-08 09:21:26
 * @Describtion: 顺序搜索
 */
function sequentialSearch(arr, target) {
    for (let i = 0; i < arrayBuffer.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
const arr = [4, 35, 56, 64, 333, 34, 5];
console.log(sequentialSearch(arr, 5));
