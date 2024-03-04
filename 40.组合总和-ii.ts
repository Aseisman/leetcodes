/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    const res = [] as number[][];
    const dfs = (start: number, track: number[]) => {
      const sum = track.reduce((pre, cur) => pre + cur, 0);
  
      if (sum > target) return;
      if (sum == target) return res.push([...track]);
  
      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] == candidates[i - 1]) continue; // 除去相同数的干扰
        track.push(candidates[i]);
        dfs(i + 1, track);// i+1 和 i 区别能不能复用当前数
        track.pop();
      }
    };
    candidates.sort((a, b) => a - b);
    dfs(0, []);
    return res;
};
// @lc code=end

