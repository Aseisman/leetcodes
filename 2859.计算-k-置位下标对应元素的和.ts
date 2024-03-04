/*
 * @lc app=leetcode.cn id=2859 lang=typescript
 *
 * [2859] 计算 K 置位下标对应元素的和
 */

// @lc code=start
// function sumIndicesWithKSetBits(nums: number[], k: number): number {
//     const isK = (num: number, k: number) => {
//         const binary = num.toString(2);
//         for(let i = 0; i < binary.length; i++){
//             if(binary[i] === '1'){
//                 k--;
//             }
//         }
//         return k == 0;
//     }
//     return nums.map((num, index) => {
//         if (isK(index, k)) {
//             return num;
//         }else{
//             return -1;
//         }
//     }).filter(num => num !== -1).reduce((acc, cur) => acc + cur, 0);
// };
function sumIndicesWithKSetBits(nums: number[], k: number): number {
    const bitCount = (x) => {
        let cnt = 0;
        while (x) {
            cnt += (x % 2);
            x >>= 1;
        }
        return cnt;
    }

    let ans = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (bitCount(i) == k) {
            ans += nums[i];
        }
    }
    return ans;
};
// @lc code=end

