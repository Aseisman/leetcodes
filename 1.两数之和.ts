/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 暴力 o(n*(n-1))
function twoSum(nums: number[], target: number): number[] {
    // 哈希解法 O(n)
    let map = new Map();
    for(let i = 0; i< nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i];
        }else{
            map.set(nums[i],i);
        }
    }
    return [];
};

// @lc code=end
