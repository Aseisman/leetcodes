/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    let ans:number[][] = [];
    let queue = [root];
    while(queue.length){
        let arr:number[] = [];
        let len = queue.length;
        while(len){
            const top = queue.shift();
            if(top){
                arr.push(top.val);
                queue.push(...[top.left,top.right]);
            }
            len--;
        }
        arr.length&&ans.push(arr);
    }
    return ans;
};
// @lc code=end

