/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    // 1 排序 2 map 3 抵消 4 分治(二分 时间nlogn,空间logn)
    // 3 抵消:假定一个值进行比较,相同+1,不同-1; 等0时,换成下一个值
    // 时间O(N),空间O(1)
    let flag = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(count == 0){
            flag = nums[i];
        }
        if(nums[i] == flag){
            count++;
        }else{
            count--;
        }
    }
    return flag;
};
// @lc code=end

