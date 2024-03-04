/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    // 二叉树的两种解题思路，1：遍历二叉树得出答案；2：通过分解问题计算得出答案
    // 此为分解问题得出答案， 有点动态规划
    if(!root){
        return 0;
    }
    let left= maxDepth(root.left);
    let right = maxDepth(root.right);
    let res = Math.max(left,right)+1;
    return res;
};

var maxDepth  = function(root){
    // 遍历二叉树得出答案
    let res= 0,depth=0;
    let traverse=(root)=>{
        if(!root){
            res = Math.max(res,depth);
        }
        depth++;
        traverse(root.left);
        traverse(root.right);
        depth--;
    }
    traverse(root);
    return res;
}

// @lc code=end

