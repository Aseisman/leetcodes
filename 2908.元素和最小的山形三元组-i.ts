/*
 * @lc app=leetcode.cn id=2908 lang=typescript
 *
 * [2908] 元素和最小的山形三元组 I
 */

// @lc code=start
function minimumSum(nums: number[]): number {
  // 原本想用二分法，但是二分法倒是挺麻烦的，因为 i j k 三者可以不连续
  //   三指针，也不行，因为指针之间没什么关联，就和三重循环一样的道理
  //   let ans = Infinity;
  //   for (let i = 0; i < nums.length - 2; i++) {
  //     for (let j = i + 1; j < nums.length - 1; j++) {
  //       for (let k = i + 2; k < nums.length; k++) {
  //         if (nums[i] < nums[j] && nums[j] > nums[k]) {
  //             ans = Math.min(ans, nums[i] + nums[j] + nums[k]);
  //           }
  //       }
  //     }
  //   }
  //   return ans == Infinity ? -1 : ans;

  // 我们从左到右遍历，来求出前缀数组中的最小值，用 left[i] 来表示前 i 个数字的最小值。
  // 然后我们从右到左遍历，用 right 来表示当前数字右边的最小值。
  // 如果一个数比左右两边最小值大时，说明找到一个山形三元组，并更新当前山形三元组的最小元素和。
  // 最后我们返回最小元素和即可。
  let ans = Infinity;
  const len = nums.length;
  const lefts = [] as number[];
  lefts[0] = nums[0];
  for (let i = 1; i < len - 1; i++) {
    lefts[i] = nums[i] < lefts[i - 1] ? nums[i] : lefts[i - 1];
  }

  let right = nums[len - 1];
  for (let i = len - 2; i > 0; i--) {
    right = Math.min(nums[i + 1], right);
    const cur = nums[i];
    const left = lefts[i];
    if (left < cur && cur > right) {
      ans = Math.min(ans, left + right + cur);
    }
  }
  return ans == Infinity ? -1 : ans;
}

// @lc code=end
