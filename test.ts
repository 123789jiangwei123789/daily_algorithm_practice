//树结构
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// 构建树结构
function buildTree<T>(array: T[]) {
  if (!array.length) {
    return;
  }
  let root = new TreeNode(array.shift() as number);
  let nodeQueue = [root];
  while (array.length > 0) {
    let node = nodeQueue.shift();
    let left = new TreeNode(array.shift() as number);
    node!.left = left;
    nodeQueue.push(left!);
    if (!array.length) {
      break;
    }
    let right = new TreeNode(array.shift() as number);
    node!.right = right;
    nodeQueue.push(right!);
  }
  return root;
}
console.log(buildTree<number | null>([2, 3, 4, null, null, 7, 8]));
