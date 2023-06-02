/**对应题目 */
https://leetcode.cn/problems/roman-to-integer/

/**解题思路 */
//自解：对字符串进行遍历并与数据源对象(罗马数字典)进行比对相加，两种情况，一种是当前的值大于下一个的值，正常相加，一种是小于，则进行相减，并跳过下一次循环
// 两种情况都得保证不会索引越界的问题
//官解：对字符串进行遍历并与数据源对象(罗马数字典)进行比对相加，特殊情况处理发现规律，两个数字加起来在减去前面数字的两倍即可得到结果

/**自己实现 */
// function romanToInt(s: string): number {
//     let romanObj: Record<string, number> = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let result = 0
//     for (let i = 0; i < s.length; i++) {
//         let key = i + 1 >= s.length - 1 ? s.length - 1 : i + 1
//         if (romanObj[s[i]] >= romanObj[s[key]]) {
//             result += romanObj[s[i]]
//         } else {
//             result = result + romanObj[s[key]] - romanObj[s[i]]
//             i = i + 1
//         }
//     }
//     return result
// };
/**官方实现 */
function romanToInt(s: string): number {
    let num = 0;
    let left = 0;
    let last = 0;
    let map: Record<string, number> = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    while (s[left]) {
        let n = map[s[left]];
        num += n;
        if (last > 0) {
            if (last < n) {
                num -= last * 2; //处理特殊情况
            }
        }
        last = n;
        left++;
    }

    return num;
};
/**运行用例 */
console.log(romanToInt('MCMXCIV'));
/**其他实现方法 */
//只记录出现过的最大位来减少消耗,倒叙遍历，这样通常情况就是由小到大，记录出现过的最大的位，比它小则是特殊，否则为常规