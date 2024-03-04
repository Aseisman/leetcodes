/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 有个规律，当我们按前序遍历一个一个取值时，我们可以在中序遍历找到这个值，然后slice左右两部分，即树的两部分，再继续递归即可
    let traverse =(nums)=>{
        if(!nums.length){
            return null;
        }
        let num = preorder.shift();
        let index = nums.findIndex(v=>v==num);
        let node = new TreeNode(num);
        node.left = traverse(nums.slice(0,index));
        node.right = traverse(nums.slice(index+1));
        return node;    
    }
    return traverse(inorder);
};
// @lc code=end

