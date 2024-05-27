/*
 * @lc app=leetcode.cn id=1535 lang=typescript
 *
 * [1535] 找出数组游戏的赢家
 */

// @lc code=start
function getWinner(arr: number[], k: number): number {
    let prev = Math.max(arr[0],arr[1]);
    if(k == 1)return prev;
    let count = 1;
    let max = prev;
    for(let i = 2; i < arr.length; i++){
        let cur = arr[i];
        if(prev>cur){
            count++;
            if(count == k) return prev;
        }else{
            prev = cur;
            count = 1;
        }
        max = Math.max(max, cur);
    }
    return max;
};
// @lc code=end