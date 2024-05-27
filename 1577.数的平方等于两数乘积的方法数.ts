/*
 * @lc app=leetcode.cn id=1577 lang=typescript
 *
 * [1577] 数的平方等于两数乘积的方法数
 */

// @lc code=start
function numTriplets(nums1: number[], nums2: number[]): number {
    function calc(n1: number[], n2: number[]) {
        let s = 0, m = new Map()
        for (let i = 0; i < n2.length; i++) {
            for(let j = i + 1; j < n2.length; j++) {
                const k = n2[i] * n2[j]
                m.set(k, (m.get(k) || 0) + 1)
            }
        }
        for (const i of n1) s += (m.get(i ** 2) || 0)
        return s
    }
    return calc(nums1 ,nums2) + calc(nums2, nums1)
};
// @lc code=end

