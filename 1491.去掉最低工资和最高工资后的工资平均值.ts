/*
 * @lc app=leetcode.cn id=1491 lang=typescript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
function average(salary: number[]): number {
    const arr = salary.sort((a,b)=>a-b).slice(1,-1);
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
};
// @lc code=end

