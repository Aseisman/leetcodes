/*
 * @lc app=leetcode.cn id=2831 lang=typescript
 *
 * [2831] 找出最长等值子数组
 */

// @lc code=start
function longestEqualSubarray(nums: number[], k: number): number {
    // 滑动窗口
    if(nums.length <= 1) return nums.length
    let left = 0, right = 0;
    const window = {};
    let max = 0;//保存当前最大值;
    
    while(right < nums.length && left <= right){
        const num = nums[right];
        window[num] = (window[num] || 0) + 1;
        // 判断窗口是否需要收缩,往常是window某个值超过多少了,就需要收缩;
        // 此时是当right - left + 1 > max + k时
        max = Math.max(window[num], max);
        if(right - left + 1 > max + k){
            let d = nums[left];
            window[d]--;//删除k个值也无法让他们合到一起时,左边收缩;
            left++;
        }
        right++;
    }
    return max;

};
// @lc code=end

// 滑动窗口
// 时间复杂度n，空间复杂度n
// var longestEqualSubarray = function(nums, k) {
//     if(nums.length <= 1) return nums.length
//     const obj = new Object()
//     let len = nums.length, left = 0, right = 0, max = 0
//     while(right < len && left <= right) {
//         obj[nums[right]] = (obj[nums[right]] ?? 0) + 1
//         max = Math.max(max, obj[nums[right]])
//         if(right - left + 1 > max + k) {
//             obj[nums[left]]--
//             left++
//         }
//         right++
//     }
//     return max 
// };