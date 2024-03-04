/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 递归
    let res=[];
    let traverse=(root,depth)=>{
        if(!root)return;
        if(res[depth]){
            res[depth].push(root.val);
        }else{
            res[depth]=[];
            res[depth].push(root.val);
        };
        traverse(root.left,depth+1);
        traverse(root.right,depth+1);
    }
    return res;
};
var levelOrder = function(root) {
    // 广度优先搜索
    let res=[];
    let queue=[];
    if(!root)return res;
    queue.push(root);
    while(queue.length){
        let temp=[];
        let num = queue.length;//记录每一层的节点个数
        while(num--){
            let cur = queue.shift();
            temp.push(cur.val);
            cur.left&&queue.push(cur.left);
            cur.right&&queue.push(cur.right);
        }
        if(temp.length){
            res.push(temp);
        }
    }
    return res;
};
// @lc code=end

