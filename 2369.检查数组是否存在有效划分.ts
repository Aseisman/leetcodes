/*
 * @lc app=leetcode.cn id=2369 lang=typescript
 *
 * [2369] 检查数组是否存在有效划分
 */

// @lc code=start
function validPartition(nums: number[]): boolean {
  //   // 贪心 超时;
  //   const track = (len: number) => {
  //     if (len === nums.length) return true;
  //     const index = len;
  //     let status = false;
  //     if (nums[index] == nums[index + 1]) {
  //       status = status || track(index + 2);
  //     }
  //     if (
  //       (nums[index] == nums[index + 1] && nums[index + 1] == nums[index + 2]) ||
  //       (nums[index] + 1 == nums[index + 1] &&
  //         nums[index + 1] + 1 == nums[index + 2])
  //     ) {
  //       status = status || track(index + 3);
  //     }
  //     return status;
  //   };
  //   return track(0);

  // dp
  const isThreeRule = (i) =>
    (nums[i - 2] == nums[i - 1] && nums[i - 1] == nums[i]) ||
    (nums[i - 2] + 1 == nums[i - 1] && nums[i - 1] + 1 == nums[i]);
  const isTwoRule = (i) => nums[i - 1] == nums[i];
  const dp = new Array(nums.length).fill(0);
  dp[0] = false;
  dp[1] = isTwoRule(1);
  // dp 表示前几个能不能组成划分数组
  // dp[0] = 0, dp[1] = isTwo, dp[2] == isThree
  // dp[i] = dp[i-3] && isThree || dp[i-2] && isTwo;
  for (let i = 2; i < nums.length; i++) {
    if (i >= 3) {
      dp[i] = (dp[i - 3] && isThreeRule(i)) || (dp[i - 2] && isTwoRule(i));
    } else {
      dp[i] = isThreeRule(i);
    }
  }
  return dp[nums.length - 1];
}
// @lc code=end
