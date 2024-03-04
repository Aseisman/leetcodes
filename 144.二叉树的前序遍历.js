/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // 两种实现，递归 and 迭代
    let res =[];
    let traverse = (root) =>{
        if(!root)return;
        res.push(root.val);
        traverse(root.left);
        traverse(root.right);
        return;
    }
    traverse(root,0);
    return res;
};
var preorderTraversal = function(root) {
    // 迭代
    // 利用堆栈的方式，往栈里面丢,先丢右再左
    if(!root)return[];
    let res =[],stack=[];
    stack.push(root);
    while(stack.length){
        cur=stack.pop();
        res.push(cur.val);
        cur.right&&stack.push(cur.right);
        cur.left&&stack.push(cur.left);
    }
    return res;
};
// @lc code=end

