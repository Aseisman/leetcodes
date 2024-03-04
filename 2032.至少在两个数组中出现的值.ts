/*
 * @lc app=leetcode.cn id=2032 lang=typescript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  let map: Map<string, number> = new Map();
  let res: number[] = [];
  [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)].forEach((item) => {
    let v = map.get(item + "");
    if(v && v==1){
      res.push(Number(item));
    }
    map.set(item + "", v ? v + 1 : 1);
  });
  return res;
}
// @lc code=end
