/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let ans = 0;
  nums.forEach((num) => {
    if(num !== val){
        nums[ans++] = num;
    }
  });
  return ans;
}
// @lc code=end
