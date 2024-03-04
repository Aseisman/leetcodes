/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let getMin = (node) =>{
        while(node.left){
            node=node.left;
        }
        return node;
    }
    let traverse = (root,key)=>{
        if(!root)return root;
        if(root.val==key){
            // 三种情况
            // 节点刚好是叶子节点，即root.left && root.right 都为空；
            // 节点只有一个子节点
            if(!root.left)return root.right;
            if(!root.right)return root.left;
            // 节点有两个节点
            let minNode = getMin(root.right);
            root.val = minNode.val;
            //找到最小的，顶替之后，删除这个节点
            root.right = traverse(root.right,minNode.val);
            
        }else if(root.val<key){
            root.right = traverse(root.right,key);
        }else{
            root.left = traverse(root.left,key);
        }
        return root;
    }
    return traverse(root,key);
};
// @lc code=end

var deleteNode = function(root, key) {
    // 递归
    let traverse = (root,key)=>{
        if(!root)return root;
        // key所在的位置有几种情况，1叶子节点 2中间节点（左有右无 or 左无右有）
        // 1 如果是叶子节点，直接删掉即可
        // 2 左有右无，把将左边的顶上来，左无右有，将右边的顶上来
        // 3 两个都有
        if(root.val==key){
            if(!root.left)return root.right;
            if(!root.right)return root.left;
            // 两个都有时
            let minNode = getMin(root.right);
            root.val = minNode.val;
            root.right = traverse(root.right,minNode.val);//把最后的最小min给删除掉
        }else if(root.val<key){
            root.right = traverse(root.right,key);
        }else{
            root.left = traverse(root.left,key);
        }
        return root;
    }
    return traverse(root,key);
}