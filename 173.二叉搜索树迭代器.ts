/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
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

class BSTIterator {
    private arr:number[] = [];
    private treeLen:number = 0;
    private treeIndex:number = 0;
    constructor(root: TreeNode | null) {
        // init
        let dfs = (node:TreeNode | null)=>{
            if(!node)return;
            dfs(node.left);
            this.arr.push(node.val);
            dfs(node.right);
        }
        dfs(root);
        this.treeLen = this.arr.length;
        this.treeIndex = 0;
    }

    next(): number {
        return this.arr[this.treeIndex++];
    }

    hasNext(): boolean {
        return this.treeIndex < this.treeLen;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

