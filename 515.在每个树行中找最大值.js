/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    // 层序遍历 BFS
    let res = [];
    let queue = [];
    queue.push(root);
    let p = root;
    while(queue.length){
        let max = 0;
        let newQueue = [];
        queue.forEach(item=>{
            if(item.val>max){
                max = item.val;
            }
            item.left && newQueue.push(item.left);
            item.right && newQueue.push(item.right);
        })
        queue = newQueue;
        res.push(max);
    }
    return res;
};
// @lc code=end

