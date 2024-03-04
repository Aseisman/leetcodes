/*
 * @lc app=leetcode.cn id=1046 lang=typescript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
    stones.sort((a,b)=>a-b);
    while(stones.length > 1){
        let max1 = stones.pop() || 0;
        let max2 = stones.pop() || 0;
        if(max1 != max2){
            stones.push(max1 - max2);
            stones.sort((a,b)=>a-b);
        }
    }
    return stones.length ? stones[0] : 0;
};
// @lc code=end

