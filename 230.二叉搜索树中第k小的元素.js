/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //BST（binary search tree）的中序遍历是升序的
    //  第k小，就升序解决就完事了
    let res = null,num=1;
    let traverse = (root)=>{
        if(!root)return null;
        !res&&traverse(root.left);
        if(num==k){
            res=root.val;
        }
        num++;
        !res&&traverse(root.right);
    }
    traverse(root);
    return res;
};

// @lc code=end

