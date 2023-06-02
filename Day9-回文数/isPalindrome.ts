/**对应题目 */
https://leetcode.cn/problems/palindrome-number/

/**解题思路 */
//自解：转换成字符串，先保存正序的值，在保存反序的值，看是否相等
//官解：核心思想还是先转字符串，在转成数组，进行遍历，利用双指针思想

/**自己实现 */
// function isPalindrome(x: number): boolean {
//     let str = String(x).split('').join('')
//     let newStr = str.split('').reverse().join('')
//     return str === newStr
// };
/**官方实现 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    const s = x.toString().split('')
    let b = 0, e = s.length - 1
    while (b < e) {
        if (s[b] !== s[e]) return false
        ++b, --e
    }
    return true
};
/**运行用例 */
console.log(isPalindrome(323));
/**其他实现方法 */
// 反转后半部分的数字，和前半部分进行对比