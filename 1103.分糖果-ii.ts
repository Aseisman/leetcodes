/*
 * @lc app=leetcode.cn id=1103 lang=typescript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
function distributeCandies(candies: number, num_people: number): number[] {
    let ans = new Array(num_people).fill(0);
    let i = 0;
    let curCount = 1;
    while(candies){
        curCount = candies > curCount ? curCount : candies;
        candies-=curCount;
        ans[i] += curCount;
        curCount++;
        i = (i + 1) % num_people;
    }
    return ans;
    

    // 新思路，，todo
    // 1 ... n
    // n+1 ... n+n
    // n+n+1 ... 3n 
    // 总结： 第i个数：i + (1*n+i) + (2*n+i) + ...+(m*n+i) = (m+1)*i + n(1+m)*m/2
    // 循环m从1起，直到(m+1)*i + n(1+m)*m/2 >= candies时中止；
};
// @lc code=end

