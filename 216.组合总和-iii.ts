/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
// function combinationSum3(k: number, n: number): number[][] {
//     const res = [] as number[][];
//     const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const dfs = (start: number, track: number[]) => {
//       if (track.length > k) return;
//       const sum = track.reduce((pre, cur) => pre + cur, 0);
//       if (sum == n && track.length == k) return res.push([...track]);
//       if (sum > n) return;
//       for (let i = start; i < 9; i++) {
//         track.push(data[i]);
//         dfs(i + 1, track);
//         track.pop();
//       }
//     };
//     dfs(0, []);
//     return res;
// };
function combinationSum3(k: number, n: number): number[][] {
  const ans = [] as number[][];
  const dfs = (track, idx) => {
    if (track.length > k) return;
    const sum = track.reduce((pre, cur) => pre + cur, 0);
    if (sum == n && track.length == k) return ans.push([...track]);
    if (sum > n) return;
    for (let i = idx; i <= 9; i++) {
      track.push(i);
      dfs(track, i + 1);
      track.pop();
    }
  };
  dfs([], 1);
  return ans;
}
// @lc code=end
