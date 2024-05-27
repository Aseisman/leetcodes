/*
 * @lc app=leetcode.cn id=1262 lang=typescript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
function maxSumDivThree(nums: number[]): number {
  // dfs超时
//   let ans = 0;
//   const len = nums.length;
//   const dfs = (sum, i) => {
//     if (i > len) return;
//     if (sum % 3 == 0) {
//       ans = Math.max(ans, sum);
//     }
//     dfs(sum + (nums[i] || 0), i + 1);
//     dfs(sum, i + 1);
//   };
//   dfs(0, 0);
//   return ans;


    // 还是得dp
    // 维护一个余数为0，1，2的remainder，然后dp取值；
    const remainder = [0, -Infinity, -Infinity];
    for (let i = 0; i < nums.length; i++) {
        const [a, b, c] = [remainder[0] + nums[i], remainder[1] + nums[i], remainder[2] + nums[i]];
        remainder[a % 3] = Math.max(remainder[a % 3], a);
        remainder[b % 3] = Math.max(remainder[b % 3], b);
        remainder[c % 3] = Math.max(remainder[c % 3], c);
    }
    return remainder[0];

}
// @lc code=end
