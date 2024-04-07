/*
 * @lc app=leetcode.cn id=1997 lang=typescript
 *
 * [1997] 访问完所有房间的第一天
 */

// @lc code=start
function firstDayBeenInAllRooms(nextVisit: number[]): number {
  // const mod = 1e9 + 7;
  // const len = nextVisit.length;
  // const dp = new Array(len).fill(0);

  // // 初始化原地待一天+访问下一个房间一天
  // dp[0] = 2;
  // for (let i = 1; i < len; i++) {
  //     const to = nextVisit[i];
  //     dp[i] = 2 + dp[i - 1];
  //     if (to) {
  //         // 避免负数
  //         dp[i] = (dp[i] - dp[to - 1] + mod) % mod;
  //     }
  //     dp[i] = (dp[i] + dp[i - 1]) % mod;
  // }
  // return dp[len - 2]; //题目保证n >= 2

  // n 0 ~ n-1
  // 日期 房间i  nextVisit
  // 0  0  [0, 0]    此时需要知道房间0访问了一遍，下一天要访问nextVisit[0]
  // 1  nextVisit[0]=0 [0,0]    此时需要知道房间0访问了两遍，下一天要访问 (0 + 1) % n = 1号房间
  // 2  1号房间访问完，所有的房间就访问完了，总的花费了2天；

  // dp[i] 表示第一次到达 i 需要的天数，
  // 初始状态 dp[0] = 1
  // dp[i] = dp[i - 1] + 1 + dp[i - 1] - dp[nextVisit [i - 1]] + 1

  // 第一个 dp [i - 1] 表示第一次到达 i - 1 花费的天数
  // 第一个 1 表示从 i - 1 到 nextVisit [i - 1]
  // dp [i - 1] - dp [nextVisit [i - 1]] 表示从 nextVisit [i - 1] 重新回到 i - 1 花费的天数
  // 第二个 1 表示从 i - 1 到 i

  // 这里的重点是从 nextVisit[i - 1] 重新回到 i - 1 是和第一次到达 i - 1 的过程完全一样的，
  // 所以只需要减掉 从 0 到 nextVisit[i - 1] 的天数就是从 nextVisit[i - 1] 重新回到 i - 1 的天数

  // 然后因为题目要求返回的天数是从 0 开始计算的，最后的答案是 dp[n - 1] - 1
}
// @lc code=end
