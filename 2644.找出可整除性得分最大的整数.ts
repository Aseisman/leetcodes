/*
 * @lc app=leetcode.cn id=2644 lang=typescript
 *
 * [2644] 找出可整除性得分最大的整数
 */

// @lc code=start
function maxDivScore(nums: number[], divisors: number[]): number {
  let ans = Infinity, max = 0;
  for(let d of divisors){
    let x = nums.filter(v=>v % d === 0 ).length;
    if(max == x && ans > d) ans = d;
    else if(max < x){
        max = x;
        ans = d;
    } 
  }
  return ans;  
}
// @lc code=end
