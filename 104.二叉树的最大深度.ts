/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
    // 回溯?
    const dfs = (node,dep) =>{
        if(!node) return dep;
        const leftdep = dfs(node.left,dep+1);
        const rightdep = dfs(node.right,dep+1);
        return Math.max(leftdep,rightdep);
    }
    return dfs(root,0);
};
// @lc code=end

