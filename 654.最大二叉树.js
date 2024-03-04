/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let findMax = (nums)=>{
        let max=nums[0],index=0;
        nums.forEach((v,i)=>{
            if(v>max){
                max=v;
                index=i;
            }
        })
        return {
            max,
            index
        }
    }
    let root;
    let traverse = (nums)=>{
        if(!nums.length){
            return null;
        }
        let {
            max,index
        } = findMax(nums);
        let node = new TreeNode(max);
        node.left = traverse(nums.slice(0,index));
        node.right= traverse(nums.slice(index+1));
        return node;
    }
    root=traverse(nums);
    return root;
};
// @lc code=end

