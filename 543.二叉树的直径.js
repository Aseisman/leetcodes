/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    // 二叉树的直径=左右节点最大深度之和
    // 利用后序遍历计算最大直径
    let res=0;
    let traverse = (root)=>{
        if(!root){
            return 0;
        }
        let left=traverse(root.left);
        let right=traverse(root.right);       
        res = Math.max(res,left+right);
        return 1+Math.max(left,right);
    }
    traverse(root);
    return res;
};
// @lc code=end

