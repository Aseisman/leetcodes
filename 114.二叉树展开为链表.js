/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let top = new TreeNode(),p=top;
    // 递归 好像不行，得存着
    // let traverse = (root) =>{
    //     if(!root)return;
    //     p.right=root;
    //     p.left=null;
    //     p=p.right;
    //     traverse(root.left);
    //     traverse(root.right);
    // }
    // traverse(root);
    // return top.right;
};
var flatten = function(root) {
    let res= new TreeNode(),p=res;
    let queue = [];
    queue.push(root);
    while(queue.length){
        let temp=queue.pop();
        p.right=temp;
        p.left=null;
        p=p.right;
        temp.right&&queue.push(temp.right);//先右再左
        temp.left&&queue.push(temp.left);
    }
    return res.right;
}

var flatten = function (root){
    // leetcode上的聪明解法：
    while(root){
        let p = root.left;
        if(p){
            while(p.right) p=p.right;
            p.right=root.right;
            root.right=root.left;
            root.left=null;
        }
        root=root.right;
    }
    /**
     *    1
     *   2  5
     *  3 4  6
     * 
     *   ====
     *  1
     *    2
     *   3  4
     *        5
     *          6
     *  root:1,p:4;
     *  p.right=root.right;
     *  root.right=root.left
     *  root.left=null
     * 
     */
}

// @lc code=end

