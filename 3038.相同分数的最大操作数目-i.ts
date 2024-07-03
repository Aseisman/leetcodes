/*
 * @lc app=leetcode.cn id=3038 lang=typescript
 *
 * [3038] 相同分数的最大操作数目 I
 */

// @lc code=start
function maxOperations(nums: number[]): number {
    let ans = 0;
    let sum = -1;
    while(nums.length >= 2){
        const num1 = nums.shift() as number;
        const num2 = nums.shift() as number;
        sum == -1 && (sum = num1 + num2);
        if(sum == num1 + num2){
            ans++;
        }else{
            return ans;
        }
    }
    return ans;
};
// @lc code=end

