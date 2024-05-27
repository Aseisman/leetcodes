/*
 * @lc app=leetcode.cn id=2176 lang=typescript
 *
 * [2176] 统计数组中相等且可以被整除的数对
 */

// @lc code=start
function countPairs(nums: number[], k: number): number {
    // // 暴力
    // let ans = 0;
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         (i * j) % k == 0 && nums[i]==nums[j] && ans++;
    //     }
    // }
    // return ans;
    // 2. map存下标
    let ans = 0;
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],[i]);
            continue;
        }
        const arr = map.get(nums[i]);
        arr.forEach(index=>{
            (i * index) % k == 0 && ans++;
        })
        map.set(nums[i],[...arr,i])
    }
    return ans;
};
// @lc code=end

