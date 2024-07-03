/*
 * @lc app=leetcode.cn id=2594 lang=typescript
 *
 * [2594] 修车的最少时间
 */

// @lc code=start
function repairCars(ranks: number[], cars: number): number {
    // t = r * n^2       =>        n = (t/r)开根
    // 即在相同n情况下，r越小，t越大。
    // 我们便可以让r选择最小的一个来使得t最大。
    // 二分法，选取0 ~ min(ranks) * cars * cars ；
    // 然后进行二分，找到能够满足的rank * cars * cars;
    // n相同的情况下，最小的t即为如下的right值；
    let left = 0;
    let right = Math.min(...ranks) * cars * cars;
    while (left + 1 < right) { // 开区间
        const mid = Math.floor((left + right) / 2);
        let s = 0;
        for (const r of ranks) {
            s += Math.floor(Math.sqrt(mid / r));
        }
        if (s >= cars) {
            right = mid; // 满足要求
        } else {
            left = mid;
        }
    }
    return right; // 最小的满足要求的值
};
// @lc code=end