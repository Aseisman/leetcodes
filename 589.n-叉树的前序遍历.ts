/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */
// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    // if (!root) return [];
    // const res: number[] = [root.val];
    // if(root.children.length > 0){
    //     for(let i = 0; i < root.children.length; i++){
    //         res.push(...preorder(root.children[i]));
    //     }
    // }
    // return res;
    if (!root) return [];
    const res: number[] = [];
    const stack: Node[] = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        res.push(node.val);
        if(node.children.length > 0){
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
    return res;
};
// @lc code=end

