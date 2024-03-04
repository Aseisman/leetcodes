/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function(root) {
    if(!root)return 0;
    let robRoot = root.val;
    if(root.left){
        robRoot+=rob(root.left.left)+rob(root.left.right);
    }
    if(root.right){
        robRoot+=rob(root.right.left)+rob(root.right.right);
    }
    const robExRoot = rob(root.left)+rob(root.right);
    return Math.max(robRoot,robExRoot);
};

var rob = function(root){
    const memo = new Map();

    const helper = (root)=>{
        if(!root)return 0;
        if(memo.has(root))return memo.get(root);
        let robRoot = root.val;
        if(root.left){
            robRoot+=helper(root.left.left)+helper(root.left.right);
        }
        if(root.right){
            robRoot+=helper(root.right.left)+helper(root.right.right);
        }
        const robExRoot = helper(root.left)+helper(root.right);
        const res = Math.max(robRoot,robExRoot);
        memo.set(root,res);
        return res;
    }
    return helper(root);
}

var rob = function(root){
    // let dp = Array.from(new Array(),()=>new Array())
}

// @lc code=end

