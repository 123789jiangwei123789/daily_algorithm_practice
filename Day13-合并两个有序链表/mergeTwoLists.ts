/**对应题目 */
// https://leetcode.cn/problems/merge-two-sorted-lists/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
const createListNode = (list: number[] | []) => {
    let listNode = new ListNode(list[0])
    let currentNode = listNode
    //核心思路当前节点指向下一个节点next，以此类推，形成相互引用关系
    for (let i = 1; i < list.length; i++) {
        currentNode.next = new ListNode(list[i])
        currentNode = currentNode.next
    }
    return listNode
}
/**解题思路 */
//自解：核心思路比较当前list1的val和list2的val的大小，谁小就移动谁的当前节点指针指向下一个指针
//官解：如果 l1 或者 l2 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。否则，我们要判断 l1 和 l2 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。如果两个链表有一个为空，递归结束。


/**自己实现 */
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const head: any = { next: null }
//     let currentNode = head
//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             currentNode.next = list1
//             list1 = list1.next
//         } else {
//             currentNode.next = list2
//             list2 = list2.next
//         }
//         currentNode = currentNode.next
//     }
//     if (list1) currentNode.next = list1
//     if (list2) currentNode.next = list2

//     return head.next
// };

/**官方实现 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
/**运行用例 */
mergeTwoLists(createListNode([1, 2, 3]), createListNode([1, 2, 3]));
/**其他实现方法 */
//迭代实现
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const prehead = new ListNode(-1);

//     let prev = prehead;
//     while (list1 != null && list2 != null) {
//         if (list1.val <= list2.val) {
//             prev.next = list1;
//             list1 = list1.next;
//         } else {
//             prev.next = list2;
//             list2 = list2.next;
//         }
//         prev = prev.next;
//     }
//     // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
//     prev.next = list1 === null ? list2 : list1;

//     return prehead.next;
// }

