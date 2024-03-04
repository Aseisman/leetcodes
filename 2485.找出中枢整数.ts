/*
 * @lc app=leetcode.cn id=2485 lang=typescript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
function pivotInteger(n: number): number {
    // 暴力
    // if(n == 1)return 1;
    // let mid = Math.floor(n /2);
    // for(let i = mid ; i < n ; i++){
    //     if((1 + i) * i /2 == (i+n) *(n - i + 1)/2)return i;
    // }
    // return -1;


    // 数学
    // 1~x : x(x+1) / 2 
    // x~n : [ n(n+1) - x(x-1) ] /2 整个的值，减去1到x的值
    // 两式相等 求的
    //      _________ 
    // x = √ n(n+1)/2

    const m = Math.floor((n * (n + 1)) / 2); //右边根号里面的值
    const x =  Math.floor(Math.sqrt(m)); //左边
    return x * x === m ? x : -1; 
};
// @lc code=end

