/*
 * @lc app=leetcode.cn id=743 lang=typescript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
function networkDelayTime(times: number[][], n: number, k: number): number {
//   let ans = 0;
//   const used = new Array(n + 1).fill(0);
//   const dfs = (start: number) => {
//     const arr = times.filter((item) => item[0] == start);
//     let maxlen = 1;
//     if (!arr.length) return;
//     arr.forEach((item) => {
//       if (!used[item[1]]) {
//         used[item[1]] = 1;
//         maxlen = Math.max(item[2], maxlen);
//         dfs(item[1]);
//       }
//     });
//     maxlen > ans ? (ans = maxlen) : (ans = ans - maxlen);
//   };
//   used[k] = 1;
//   dfs(k);
//   if (used.filter((item) => item == 0).length != 1) return -1;
//   return ans;
}
// @lc code=end
