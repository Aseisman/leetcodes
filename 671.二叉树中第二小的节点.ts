/*
 * @lc app=leetcode.cn id=671 lang=typescript
 *
 * [671] 二叉树中第二小的节点
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

function findSecondMinimumValue(root: TreeNode | null): number {
    let second = -1;
    let first = root.val;
    const dfs = (node:TreeNode| null) =>{
        if(!node)return;
        if(second !== -1 && node.val >=second)return;//值已经比第二个大了，说明后面的更不用去遍历；
        if(node.val > first){
            second = node.val;
        }
        if(second == -1 || node.val < second){
            dfs(node.left);
            dfs(node.right);
        }
    }
    dfs(root);
    return second;
};
// @lc code=end