/*
 * @lc app=leetcode.cn id=2402 lang=typescript
 *
 * [2402] 会议室 III
 */

// @lc code=start
function mostBooked(n: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);
  const ans = new Array(n).fill(0); // ans 表示每个会议室举办了多少场会议；
  const rooms = new Array(n).fill(0); //rooms 表示每个房间在哪个时间点可以被使用；
  for (let i = 0; i < meetings.length; i++) {
    const endTime = meetings[i][1];
    const startTime = meetings[i][0];
    let canUse = false; //是否有房间能用
    let best = 0; // 最先空出来的房间
    for (let j = 0; j < n; j++) {
      if (rooms[j] <= startTime) {
        canUse = true;
        ans[j]++;
        rooms[j] = endTime;
        break;
      } else if (rooms[j] < rooms[best]) {
        best = j;
      }
    }
    if (!canUse) {
      ans[best]++;
      rooms[best] += endTime - startTime;
    }
  }
  return ans.reduce((maxI, cur, i) => {
    if (cur > ans[maxI]) return i;
    return maxI;
  }, 0);
}
// console.log(
//   mostBooked(2, [
//     [0, 10],
//     [1, 5],
//     [2, 7],
//     [3, 4],
//   ])
// );
// console.log(
//   mostBooked(3, [
//     [1, 20],
//     [2, 10],
//     [3, 5],
//     [4, 9],
//     [6, 8],
//   ])
// );
// console.log(
//   mostBooked(4, [
//     [18, 19],
//     [3, 12],
//     [17, 19],
//     [2, 13],
//     [7, 10],
//   ])
// );
// console.log(
//   mostBooked(4, [
//     [6, 41],
//     [13, 31],
//     [22, 30],
//     [24, 34],
//     [25, 36],
//     [31, 46],
//     [32, 36],
//     [37, 46],
//     [48, 49],
//     [49, 50],
//   ])
// );

// @lc code=end
