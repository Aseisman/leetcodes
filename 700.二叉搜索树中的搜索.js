/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 找到对应的节点，return即可
    // 所以无论你是前中后序遍历，这都可以找得到，无非就是找了n遍
    // 技巧就是根据当前val判断root.val==val;大小，则往BST树的右左去进行查找即可
    // 暴力 
    // if(!root)return null;
    // if(root.val==target)return root;
    // let left=searchBST(root.left,val);
    // let right=searchBST(root.right,val);
    // return left!=null?left:right;

    // 判断查找
    if(!root)return null;
    if(root.val==val){
        return root;
    }
    return searchBST(root.val>val?root.left:root.right,target);
};
// @lc code=end

