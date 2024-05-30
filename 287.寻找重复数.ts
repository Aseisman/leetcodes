/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
    let slow = 0 , fast = 0;//快慢指针,跟着value提前走一步；
    while(1){
        fast = nums[nums[fast]];
        slow = nums[slow];
        if(slow == fast){
            fast = 0;
            while(nums[slow] !== nums[fast]){
                fast = nums[fast];
                slow = nums[slow];
            }
            return nums[slow];
        }
    }
    return -1;
};
// @lc code=end