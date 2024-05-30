/*
 * @lc app=leetcode.cn id=2982 lang=typescript
 *
 * [2982] 找出出现至少三次的最长特殊子字符串 II
 */

// @lc code=start
function maximumLength(s: string): number {
    // 昨天是用双指针+map保存；
    const n = s.length;
    let [l, r] = [0, n];
    const check = (x: number): boolean => {
        const cnt: number[] = Array(26).fill(0);
        for (let i = 0; i < n; ) {
            let j = i + 1;
            while (j < n && s[j] === s[i]) {
                j++;
            }
            const k = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            cnt[k] += Math.max(0, j - i - x + 1);
            if (cnt[k] >= 3) {
                return true;
            }
            i = j;
        }
        return false;
    };
    while (l < r) {
        const mid = (l + r + 1) >> 1;
        if (check(mid)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return l === 0 ? -1 : l;
};
// @lc code=end

