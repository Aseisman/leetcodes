/*
 * @lc app=leetcode.cn id=1306 lang=typescript
 *
 * [1306] 跳跃游戏 III
 */

// @lc code=start
function canReach(arr: number[], start: number): boolean {
  let map = new Map<number, boolean>();
  let len = arr.length;
  let dfs = (index) => {
    if (index < 0 || index >= len) return false;
    if (map.get(index)) return false;
    if (arr[index] == 0) return true;
    map.set(index, true);
    return dfs(index + arr[index]) || dfs(index - arr[index]);
  };
  return dfs(start);
}
// @lc code=end
