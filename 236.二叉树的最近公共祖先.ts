/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     let ans:TreeNode | null;
//     const dfs = (node:TreeNode):boolean=>{
//         if(!node)return false;
//         const isNode = node.val == p.val || node.val == q.val;
//         let l:boolean = dfs(node.left);
//         let r:boolean = dfs(node.right);
//         if(l&&r || (isNode&&(l||r))){
//             ans = node;
//             return false;
//         }
//         return isNode||l||r;
//     }
//     dfs(root);
//     return ans;
// };
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const dfs = (node:TreeNode):TreeNode|null=>{
        if(node == null || node == p || node == q)return node;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if(left && right)return node;
        else if(left && right == null)return left;
        else if(left == null && right)return right;
        else return null;
    }
    return dfs(root);
}
// @lc code=end

// [3,5,1,6,2,0,8,null,null,7,4]  \n 5 \n 4 \n