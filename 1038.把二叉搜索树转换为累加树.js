/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    // BST树特性就是中序遍历是升序的，所以降序的做法就是倒着来
    // 这道题的原理就是从最大值开始，往小，加值，
    let sum=0;
    let traverse = (root)=>{
        if(!root)return null;
        traverse(root.right);
        sum+=root.val;
        root.val=sum;
        traverse(root.left);
    }
    traverse(root)
    return root;
};
// @lc code=end

