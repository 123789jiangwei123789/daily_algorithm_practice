/*
 * @Author: JiangWei
 * @Date: 2022-08-03 10:42:05
 * @Last Modified by: JiangWei
 * @Last Modified time: 2022-08-03 10:51:52
 * @describtion 冒泡排序
 */
/**原理：
 * 1、比较相邻的元素。如果第一个比第二个大，就交换他们两个，如果不是相等的就跳过比下面的元素 ，这样依次的循环下去 直到所有的元素都比较完成才结束。
 * 2、针对所有的元素重复以上的步骤，除了最后一个。
 * 3、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */
function bubbleSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        a[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
// 功能测试
const arr = [4, 3, 6, 2, 5, 7, 9, 8, 1];
bubbleSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
