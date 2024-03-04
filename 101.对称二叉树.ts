/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

// function isSymmetric(root: TreeNode | null): boolean {
//     // 层次遍历,然后判断.迭代版本
//     let stack = [root];
//     while(stack.length){
//         const mid = stack.length /2;
//         let index = 0;
//         while(index < mid){
//             if(stack[index]?.val != stack[stack.length-1-index]?.val)return false;
//             index++;
//         }
//         const len = stack.length;
//         for(let i = 0; i < len; i++){
//             const top = stack.shift();
//             top && stack.push(...[top.left,top.right]);
//         }
//     }
//     return true;
// };

function isSymmetric(root:TreeNode | null):boolean{
    var compare = function (left, right) {
        if (left == null && right != null || left != null && right == null) return false;
        else if (left == null && right == null) return true;
        else if (left.val !== right.val) return false;
        let innerCompare = compare(left.right, right.left);
        let outerCompare = compare(left.left, right.right);
        return innerCompare && outerCompare;
    }
    if (root == null) return true;
    return compare(root.left, root.right);
}
// @lc code=end

