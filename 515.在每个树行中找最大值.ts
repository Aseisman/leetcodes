/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
    const ans:number[] = [];
    const queue = [root];
    while(queue.length){
        let max = -Infinity;
        const len = queue.length;
        for(let i = 0; i < len ; i++){
            const top = queue.shift()
            if(top){
                queue.push(top.left);
                queue.push(top.right);
                max = Math.max(max,top.val);
            }
        }
        max!=-Infinity && ans.push(max);
        max= -Infinity;
    }
    return ans;
};
// @lc code=end

