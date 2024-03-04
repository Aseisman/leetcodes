/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 中序遍历是升序的，来吧
    let flag=true,num=null;
    let traverse = (root) =>{
        if(!root)return null;
        traverse(root.left);
        if(num==null){
            num=root.val;
        }else if(root.val<=num){//等于是有[2,2,2]的情况
            flag=false;
        }else{
            num=root.val;
        }
        traverse(root.right);
    }
    traverse(root);
    return flag;
};
// @lc code=end

