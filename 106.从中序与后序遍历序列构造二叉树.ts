/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0])
    }
    // 后序遍历中最后一个节点为根节点，其左子树的节点都在中序遍历的左子树，右子树的节点都在中序遍历的右子树
    let root = new TreeNode(postorder[postorder.length - 1]);
    let index = inorder.indexOf(root.val);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1));
    return root;
};
// @lc code=end

