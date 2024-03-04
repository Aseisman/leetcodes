/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
function topKFrequent(nums: string[], k: number): string[] {
  let map = new Map();
  let res :string[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  //返回一个按出现次数降序的二维数组
  let sortArray = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(sortArray[i][0]);
  }
  return res;
}
// @lc code=end
