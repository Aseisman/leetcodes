/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start
function leastInterval(tasks: string[], n: number): number {
  let map = {};
  for (let task of tasks) {
    map[task] = (map[task] || 0) + 1;
  }
  let type = Object.keys(map);
  let max = 0;
  for (let t of type) {
    max = Math.max(map[t], max);
  }
  // 除了当前任务最大，可能还有其他的和它一样大  
  let sameCount = type.reduce((pre,cur)=>{
    if(map[cur] == max) pre++;
    return pre;
  },0)
  let ret = (max - 1) * (n + 1) + sameCount;
  return Math.max(ret, tasks.length);
}
// @lc code=end
