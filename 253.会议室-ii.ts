// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi]
// return the minimum number of conference rooms required.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: 1

/*
 * @lc app=leetcode.cn id=253 lang=typescript
 *
 * [253] 会议室-ii
 */

// @lc code=start
function MinimunMeetingsRooms(intervals: number[][]): number {
  let dp = new Array(1000010).fill(0); //dp[i]，索引i表示一个时间点，每个索引的值表示当时正在进行的会议数量的净变化。
  intervals.forEach((interval) => {
    dp[interval[0]]++;
    dp[interval[1]]--;
  });
  let ans = dp[0];
  for (let i = 1; i < 1000010; i++) {
    dp[i] += dp[i - 1];
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}
console.log(
  MinimunMeetingsRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  MinimunMeetingsRooms([
    [7, 10],
    [2, 4],
  ])
);
console.log(
  MinimunMeetingsRooms([
    [1, 40],
    [2, 4],
    [4, 10],
    [6, 9],
    [7, 8],
    [10, 11],
    [12, 40],
    [13, 40],
    [],
  ])
);
