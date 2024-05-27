/*
 * @lc app=leetcode.cn id=1235 lang=typescript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    // 动态规划 + 二分查找
    // 我们首先将兼职工作按结束时间 endTime 从小到大进行排序。
    // dp[i] 表示前 i 份兼职工作可以获得的最大报酬
    // dp[0]= 0
    // dp[i]=max⁡( dp[i−1], dp[k]+profit[i−1] )

    // 其中 k 表示满足结束时间小于等于第 i−1 份工作开始时间的兼职工作数量
    //（ 因为兼职工作是按照结束时间从小到大进行排序的，所以选择第 i−1 份兼职工作后，我们只能继续选择前 k 份兼职工作），可以通过二分查找获得。
    const n = startTime.length;
    const jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]]);
    jobs.sort((a, b) => a[1] - b[1]);

    const dp = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
        dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
    }
    return dp[n];
};
const binarySearch = (jobs, right, target) => {
    let left = 0;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (jobs[mid][1] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
// @lc code=end