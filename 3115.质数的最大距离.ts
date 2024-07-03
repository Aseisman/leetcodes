/*
 * @lc app=leetcode.cn id=3115 lang=typescript
 *
 * [3115] 质数的最大距离
 */

// @lc code=start
function maximumPrimeDifference(nums: number[]): number {
    const len = nums.length;
    let left = 0, right = len - 1 ;
    const isPrime = (num)=>{
        if(num == 1) return false;
        if(num == 2) return true;
        for(let i = 2; i < num; i++){
            if(num % i == 0) return false;
        }
        return true;
    }
    while(left < len && !isPrime(nums[left])){
        left++;
    }
    while(right >= 0 && !isPrime(nums[right])){
        right--;
    }
    return right - left;
};
// @lc code=end

