/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    // 异或操作 a ^ 0 = a 而 a ^ a = 0
    let ans = 0;
    nums.forEach(num=>{
        ans ^= num;
    })
    return ans;
};
// @lc code=end

// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0=a⊕0=a。
// 任何数和其自身做异或运算，结果是 00，即 a ^ a=a⊕a=0。
// 异或运算满足交换律和结合律，即 a ^ b ^ a=b ^ a ^ a=b
// (a ^ a) ^ b = a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。

// 遍历发现有相同的则异或为0

// 输入：nums = [4,1,2,1,2]
// 4没有异或保留，然后4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ 1 ^ 1 ^ 2 ^ 2 = 4 ^ (1^1) ^ (2^2)
// 4^0^0=4
// 输出：4
