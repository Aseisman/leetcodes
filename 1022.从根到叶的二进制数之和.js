/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function(root) {
    // let ans =0;
    // let dfs = (node, binaryStr)=>{
    //     if(!node)return;
    //     binaryStr= `${binaryStr}${node.val}`;
    //     if(!node.left&&!node.right){
    //         // 叶子节点
    //         ans+=parseInt(binaryStr,2);
    //     }
    //     dfs(node.left,binaryStr);
    //     dfs(node.right,binaryStr);
    // }
    // dfs(root,'');
    // return ans;

    let sum=0;
    // 中序遍历，保存路径
    let track = (root,arr)=>{
        if(!root)return;
        arr.unshift(root.val);
        if(!root.left&&!root.right){
            sum+=arr.reduce((all,cur,index)=>{
                return all+cur*(2**index);
            },0)
        }
        track(root.left,[...arr]);
        track(root.right,[...arr]);
    }
    track(root,[]);
    return sum;
};
// @lc code=end