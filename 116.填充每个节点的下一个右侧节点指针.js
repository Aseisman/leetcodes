/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root)return root;
    let queue=[root];
    while(queue.length){
        let num = queue.length;
        while(num--){
            let temp = queue.shift();
            if(num){
                // num为0时，最后一个，next==null;
                // 不为0 时 next指向下一个;下一个就是queue的shift的第0个;
                temp.next=queue[0];
            }
            temp.left&&queue.push(temp.left);
            temp.right&&queue.push(temp.right);
        }
    }
    return root;
};
var connect = function(root) {
    if(!root)return root;
    let traverse = root=>{
        if(!root||root.left==null)return;
        root.left.next=root.right;
        if(root.next){
            // 父节点有兄弟节点
            root.right.next=root.next.left;
        }
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return root;
}

// @lc code=end

