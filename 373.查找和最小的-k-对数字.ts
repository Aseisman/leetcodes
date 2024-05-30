/*
 * @lc app=leetcode.cn id=373 lang=typescript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  // 超时，要优化。
  //   return nums1
  //     .reduce(
  //       (pre, num1) => [...pre, ...nums2.map((num2) => [num1, num2])],
  //       [] as number[][]
  //     )
  //     .sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
  //     .slice(0, k);

  //  优先列队 小顶堆
  const ans = [] as number[][],
    n = nums2.length;
  const queue = new MinPriorityQueue({
    priority: ([i, j]) => nums1[i] + nums2[j],
  });
  nums1.forEach((_, i) => i < k && queue.enqueue([i, 0]));
  for (let m = 1; m <= k && !queue.isEmpty(); m++) {
    const {
      element: [i, j],
    } = queue.dequeue();
    ans.push([nums1[i], nums2[j]]);
    j + 1 < n && queue.enqueue([i, j + 1]);
  }
  return ans;
}
// @lc code=end
