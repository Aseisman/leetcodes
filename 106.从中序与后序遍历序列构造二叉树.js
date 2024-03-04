/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 后序遍历 左| 右| 中 所以最后一个数就是最顶部数
    //  然后根据中序遍历，拆分出左子树有多少个数，在后序遍历中slice出来
    let traverse = (nums,nums2) =>{
        if(!nums2.length)return null;
        let num = nums2.pop();
        let index = nums.findIndex(v=>v==num);
        let node = new TreeNode(num);
        node.left = traverse(nums.slice(0,index),nums2.slice(0,index));
        node.right = traverse(nums.slice(index+1),nums2.slice(index));
        return node;
    }
    return traverse(inorder,postorder);
};
// @lc code=end

