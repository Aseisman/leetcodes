// Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty,
// flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

// For example:
// Given a binary tree {1,2,3,4,5},
//     1
//    / \
//   2   3
//  / \
// 4   5

// return the root of the binary tree [4,5,2,#,#,3,1].

//    4
//   / \
//  5   2
//     / \
//    3   1

// 翻译： 将一个二叉树倒转过来，然后将原来的右节点作为原来左节点的左节点;
// (即，原来的左节点变成根节点，然后右节点变成左节点，父节点变成右节点)

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
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
function upsideDownBinaryTree(root: TreeNode): TreeNode {
  // 1. 左子节点变成根节点
  // 2. 当前节点变成右节点
  // 3. 右节点变成左节点
  // 符合中序遍历；
  if (root == null || root.left == null) {
    return root;
  }
  const newRoot = upsideDownBinaryTree(root.left);
  root.left.right = root;//2
  root.left.left = root.right;//3
  root.left = null;// 清空root的子树，因为现在的root是作为了别人的右节点了，它的子树应该是
  root.right = null;
  return newRoot;
}

