/*
 * @lc app=leetcode.cn id=1953 lang=typescript
 *
 * [1953] 你可以工作的最大周数
 */

// @lc code=start
function numberOfWeeks(milestones: number[]): number {
    // 在每次工作完的最新数组中，取最大和最小，分别-1；反复横跳
    // 贪心
    // 逻辑：拿最大值max 与 其他值之和sum 进行对比
    // 满足条件: max < sum + 1;
    // max >= sum，说明其他值都能跳完，而最大值还有多余的；所以是 sum * 2 + 1
    if(milestones.length == 1){
        return 1;
    }
    milestones.sort((a, b) => b - a);
    const max = milestones[0];//最大值；
    const sum = milestones.reduce((pre,cur)=>pre + cur, 0) - max;

    if (max <= sum + 1) {
        return sum + max;
    } else {
        return 2 * sum + 1;
    }
};
// @lc code=end