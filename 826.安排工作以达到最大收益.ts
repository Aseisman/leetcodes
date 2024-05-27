/*
 * @lc app=leetcode.cn id=826 lang=typescript
 *
 * [826] 安排工作以达到最大收益
 */

// @lc code=start
function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
    // 按难度排序
  const jobs = difficulty
    .map((d, i) => [d, profit[i]])
    .sort((a, b) => a[0] - b[0]);
  let res = 0,
    i = 0,
    best = 0;
    // 将工人能力排序,然后递增循环在difficulty中取值;
  for (const w of worker.sort((a, b) => a - b)) {
    while (i < jobs.length && w >= jobs[i][0]) {
      best = Math.max(best, jobs[i][1]);
      i++;
    }
    res += best;
  }
  return res;
}
// @lc code=end
