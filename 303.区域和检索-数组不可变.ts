/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  arr: number[];
  constructor(nums: number[]) {
    this.arr = nums;
  }
  sumRange(left: number, right: number): number {
    return this.arr.reduce((pre, cur, i) => {
      if (i >= left && i <= right) return pre + cur;
      return pre;
    }, 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
