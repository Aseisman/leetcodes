/*
 * @lc app=leetcode.cn id=2475 lang=typescript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
function unequalTriplets(nums: number[]): number {
  nums.sort((a, b) => a - b);// 2 3 4 4 4
  let ans = 0;
  let start = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    if (x !== nums[i + 1]) {
      ans += start * (i - start + 1) * (n - 1 - i);
      start = i + 1;
    }
  }
  return ans;
}

//  将数据分为三部分,a,x,b a内部的数字相同, x内部的数字相同, b内部的数字相同
//  我们首先要找到a部分相同的值,然后把start标记在i+1;也就是b开始的第一个(,这是因为,a的数量就是i+1,i是从0开始的);
//  if(x !== nums[i]) 这个判断很关键: 如果一直是相同,那么都不会标记start, 
//  直到a部分已经收集完毕,即所有第一部分的相同的值收集完毕,那么nums[i]和nums[i+1]会不一样

//  就可以进来判断了,也就是 a部分,完成,x部分,可以是1个, b部分 是剩余的数;
//  
//  再次往后面走, 又遇到相同部分的,那么就继续收集,然后把相同的部分收集到a

// @lc code=end
