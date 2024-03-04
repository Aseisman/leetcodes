/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const res = [] as number[][];
    const dfs = (track: number[],index:number) => {
      const sum = track.reduce((pre, cur) => pre + cur, 0);
      if (sum > target) return;
      if (sum == target) {
        return res.push([...track]);
      }
      for (let i = index; i < candidates.length; i++) {
        track.push(candidates[i]);
        dfs(track,i);
        track.pop();
      }
    };
    candidates.sort((a,b)=>a-b);
    dfs([], 0);
    return res;
};
// @lc code=end

