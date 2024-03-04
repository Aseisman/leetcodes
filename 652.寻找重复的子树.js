/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const memo = new Map();
    const res=[];
    const traverse = (root)=>{
        if(!root){
            return '#';
        }
        const left = traverse(root.left);
        const right = traverse(root.right);
        const str = `${left},${right},${root.val}`;
        const count = memo.get(str);
        if(count==1)res.push(root);
        memo.set(str,(count||0)+1);
        return str;
    }
    traverse(root);
    return res;
};
// @lc code=end

