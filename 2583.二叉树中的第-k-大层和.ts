/*
 * @lc app=leetcode.cn id=2583 lang=typescript
 *
 * [2583] 二叉树中的第 K 大层和
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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    let stack = [root];
    let sum:number[] = [];
    while (stack.length) {
        sum.push(stack.reduce((acc, node) => acc + node.val, 0));
        const newStack = [];
        stack.forEach(node => {
            node.left && newStack.push(node.left);
            node.right && newStack.push(node.right);
        });
        stack = newStack;
    }
    return sum.length < k ? -1 : sum.sort((a, b) => b - a)[k - 1];
};
// @lc code=end

