/*
 * @lc app=leetcode.cn id=2923 lang=typescript
 *
 * [2923] 找到冠军 I
 */

// @lc code=start
function findChampion(grid: number[][]): number {
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        const sum = grid[i].reduce((acc, val) => acc + val, 0);
        if (sum === n - 1) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

