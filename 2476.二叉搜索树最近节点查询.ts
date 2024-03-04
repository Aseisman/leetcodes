/*
 * @lc app=leetcode.cn id=2476 lang=typescript
 *
 * [2476] 二叉搜索树最近节点查询
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

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    // 二叉搜索树的点：中序遍历是升序的；按照升序遍历的来；
    let res:number[][] = [];
    let arr:number[] = [];//升序的
    // 中序遍历 
    let dfs = (_root) =>{
        if(!_root)return;
        dfs(_root.left);
        arr.push(_root.val);
        dfs(_root.right);
    }
    dfs(root);
    // 二分法
    let n = arr.length;
    for(const query of queries){
        const item = [-1, -1];
        let equal = false;
        let left = 0, right = n - 1;
        while(left <= right){
            const mid = (left + right ) >> 1;
            if(arr[mid] == query){
                item[0] = item[1] = query;
                equal = true;
                break;
            }else if(arr[mid] < query){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        if(!equal){
            item[0] = arr[left - 1] ?? -1;
            item[1] = arr[left] ?? -1;
        }
        res.push([...item]);
    }
    return res;
};
// @lc code=end

