/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let map = new Map<number, number>();
  let max: number = 0;
  for (let num of nums) {
    if (map.has(num)) continue;
    let preItem = map.get(num - 1) || 0;
    let nextItem = map.get(num + 1) || 0;
    let curItem = preItem + 1 + nextItem;
    map.set(num, curItem);
    max = Math.max(max, curItem);
    map.set(num - preItem, curItem);
    map.set(num + nextItem, curItem);
  }
  return max;
}
// @lc code=end
