/*
 * @lc app=leetcode.cn id=3101 lang=typescript
 *
 * [3101] 交替子数组计数
 */

// @lc code=start
function countAlternatingSubarrays(nums: number[]): number {
  let ans = 1;
  let cnt = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] != nums[i-1]){
        cnt++;
    }else{
        cnt = 1;
    }
    ans += cnt;
  }
  return ans;
  // 101 => 3 + 2 + 1
  // 1010 => 4 + 3 + 2 + 1
  // 10101 => 5 + 4 + 3 + 2 + 1

  // 1011 => 4 + 2 + 1
  // 10100 => 5 + 3 + 2 + 1
}
// @lc code=end
