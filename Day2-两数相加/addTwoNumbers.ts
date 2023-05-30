class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return null;
  }
  let change = 0,
    addNodeList,
    currentNodeList;
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let addNodeNum = val1 + val2 + change;
    if (!addNodeList) {
      currentNodeList = new ListNode(addNodeNum);
      addNodeList = currentNodeList;
    } else {
      currentNodeList.next = new ListNode(addNodeNum);
      currentNodeList = currentNodeList.next;
    }
    change = Math.floor(addNodeNum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (change > 0) {
    currentNodeList.next = new ListNode(1);
  }
  return addNodeList;
}
