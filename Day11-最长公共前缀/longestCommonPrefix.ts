/**对应题目 */
https://leetcode.cn/problems/longest-common-prefix/

/**解题思路 */
//自解：
//结果数组存公共前缀，首先取数组第一项作为参考数组，遍历参考数组，并且遍历原数组，若参考的当前值和原数组的当前值相等且次数和原数组长度-2相等，则push，否则break
//官解：先排序(按照UTF-16 码升序)，在进行比对，相等在进行连接，不等则直接返回

/**自己实现 */
// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0) return ""
//     if (strs.length === 1) return strs[0]
//     let prefixResult: string[] = []
//     let firstArr = strs[0]
//     let isBreak = false
//     for (let j = 0; j < firstArr.length; j++) {
//         if (isBreak) break
//         let sameNum = 0
//         for (let i = 1; i < strs.length; i++) {
//             if (strs[i].length === j) {
//                 isBreak = true
//                 break
//             }
//             let strIndex = Math.min(j, strs[i].length - 1)
//             if (firstArr[j] === strs[i][strIndex]) {
//                 if (sameNum === strs.length - 2) {
//                     prefixResult.push(firstArr[j])
//                     break
//                 }
//                 sameNum++
//                 continue
//             }
//             isBreak = true
//             break
//         }
//     }
//     return prefixResult.length ? prefixResult.join('') : ""
// }
/**官方实现 */
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) {
        return strs[0];
    }

    strs = strs.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);

    const shortest = strs[0];
    const longest = strs[strs.length - 1];

    let prefix = '';

    for (let index = 0; index < shortest.length; index++) {
        if (shortest[index] === longest[index]) {
            prefix += shortest[index];
        } else {
            return prefix;
        }
    }

    return prefix;
};
/**运行用例 */
console.log(longestCommonPrefix(['"flower","flow","flight"']));
/**其他实现方法 */
//通过最短字符串来对其他字符串比对，每次比对，最短字符串删除最后一个字符，直到最短字符匹配所有前缀或者等待默认返回空字符串
// function longestCommonPrefix(strs: string[]): string {
//     const lens = strs.map((str) => str.length);
//     const minLen = Math.min(...lens);
//     // 1.先得到字符数组中最短的字符，之后用来与其他字符比较
//     const minStr = strs[lens.indexOf(minLen)];
//     // 2.定义一个默认返回的空字符
//     let res: string = '';
//     const getMin = (minS: string): string => {
//       // 用every来判断字符是否满足最小前缀
//       if (strs.every((str) => str.startsWith(minS))) {
//         // 满足时，将当前前缀赋值给结果
//         return (res = minS);
//       } else {
//         // 不满足时，调用自身，且参数为原来参数去掉最后一个字符
//         getMin(minS.slice(0, -1));
//       }
//       // 默认返回res
//       return res;
//     };
//     return getMin(minStr);
//   }