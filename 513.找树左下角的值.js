/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
    let res = 0,level=-1;//第0层
    // dfs
    let dfs = (root,current)=>{
        if(!root)return;
        if(current>level){
            res = root.val;
            level = current;
        }
        dfs(root.left,current+1);
        dfs(root.right,current+1);
    }
    dfs(root,0);
    return res;
};
var findBottomLeftValue = function(root) {
    let res = 0,queue=[root];
    // bfs 层序遍历，到最后一层的第一个就是返回值
    while(queue.length){
        res = queue[0].val;
        let len = queue.length;
        for(let i = 0; i<len ;i++){
            let cur=queue.pop();
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
    }
    return res;
};
// @lc code=end

