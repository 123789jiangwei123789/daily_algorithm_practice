/**对应题目 */
//https://leetcode.cn/problems/valid-parentheses/

/**解题思路 */
//自解：奇数下标的字符串不等于下标-1的偶数小标字符串或结合双指针则直接返回false，否则返回true（失败）
//官解：定义一个栈，每成对就pop，不成对就直接false，判断栈是否为空

/**自己实现 */
// function isValid(s: string): boolean {
//     if (s.length === 1) return false
//     let stack: string[] = []
//     for (let i = 0; i < s.length; i++) {
//         if (['[', '(', '{'].includes(s[i])) {
//             stack.push(s[i])
//         } else {
//             let start = stack[stack.length - 1]
//             if ((start === '(' && s[i] === ')') || (start === '[' && s[i] === ']') || (start === '{' && s[i] === '}')) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// };
/**官方实现 */
function isValid(s: string): boolean {
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        const strItem = s[i]
        if (strItem === '(' || strItem === '{' || strItem === '[') {
            stack.push(strItem)
        } else {
            const stackEnd = stack[stack.length - 1]
            if ((stackEnd === '(' && strItem === ')') ||
                (stackEnd === '{' && strItem === '}') ||
                (stackEnd === '[' && strItem === ']')
            ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};
/**运行用例 */
console.log(isValid("()[]"));
/**其他实现方法 */
// 和官方的反过来，存右边的另一半
// function isValid(s: string): boolean {
//     const queue: string[] = []
//     const map: Record<string, string> = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }
//     for (let i = 0; i < s.length; i++) {
//         const item = s[i]
//         if (map[item]) {
//             queue.unshift(map[item])
//         } else {
//             if (queue[0] === item) {
//                 queue.shift()
//             } else {
//                 return false
//             }
//         }
//     }
//     return queue.length === 0
// };