/*
 * @lc app=leetcode.cn id=2965 lang=typescript
 *
 * [2965] 找出缺失和重复的数字
 */

// @lc code=start
function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const count = new Array(n * n + 1).fill(0);
    count[0] = -1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            count[grid[i][j]]++;
        }
    }
    return [count.indexOf(2), count.indexOf(0)]
};
// @lc code=end

