/*
 * @lc app=leetcode.cn id=2682 lang=typescript
 *
 * [2682] 找出转圈游戏输家
 */

// @lc code=start
function circularGameLosers(n: number, k: number): number[] {
    const set: Set<number> = new Set();
    for(let i = 1; i <= n; i++) {
        set.add(i);
    }
    let cur = 1;
    let step = k;
    while(set.has(cur)) {
        set.delete(cur);
        cur = (cur + step) % n;
        if(cur === 0) cur = n;
        step = step + k;
    }
    return Array.from(set);
}
// @lc code=end
