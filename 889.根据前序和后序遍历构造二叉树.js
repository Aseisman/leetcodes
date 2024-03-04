/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let traverse = (pre,post) =>{
        if(!pre.length)return null;
        let num = pre[0];
        let index = post.findIndex(v=>v==pre[1]);
        let node = new TreeNode(num);
        node.left = traverse(pre.slice(1,index+2),post.slice(0,index+1));
        node.right = traverse(pre.slice(index+2),post.slice(index+1,post.length-1));
        return node;
    }
    return traverse(preorder,postorder);
};
// @lc code=end

