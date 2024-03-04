/*
 * @lc app=leetcode.cn id=889 lang=typescript
 *
 * [889] 根据前序和后序遍历构造二叉树
 */

// @lc code=start
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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (!preorder.length) {
    return null;
  }
  // 根节点 左子树与右子树个数相同，根据根节点获取 整个子树的数量，然后再递归进行查找
  const root = new TreeNode(preorder[0]);
  const index = postorder.indexOf(preorder[1]);
  root.left = constructFromPrePost(
    preorder.slice(1, 1 + index + 1),
    postorder.slice(0, index + 1)
  );
  root.right = constructFromPrePost(
    preorder.slice(1 + index + 1),
    postorder.slice(index + 1, postorder.length - 1)
  );
  return root;
}
// @lc code=end
