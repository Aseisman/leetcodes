/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  let len = nums.length;
  if (len < 4) return [];

  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  let outmid, mid, left, right;

  for (let i = 0; i < len - 3; i++) {
    outmid = nums[i];
    if (i > 0 && nums[i] == nums[i - 1]) continue;//去重第一步
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;//去重第二步
      mid = nums[j];
      left = j + 1;
      right = len - 1;
      while (left < right) {
        const sum = outmid + mid + nums[left] + nums[right];
        if (sum == target) {
          res.push([outmid, mid, nums[left], nums[right]]);
          //去重第三步
          while(left < right && nums[left] == nums[left + 1]) left++;
          while(left < right && nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}
// @lc code=end
console.log(fourSum([-2,-1,-1,1,1,2,2],0));
