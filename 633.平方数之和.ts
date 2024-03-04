/*
 * @lc app=leetcode.cn id=633 lang=typescript
 *
 * [633] 平方数之和
 */

// @lc code=start
function judgeSquareSum(c: number): boolean {
    // 暴力，二分法，或者特定的数学公式
    // c = a^2 + b^2;  
    // 有勾股定理c^2 = a^2 + b^2; 所以暴力的时候只需要遍历到 sqrt(c) 即可
    let left = 0 , right = Math.floor(Math.sqrt(c));
    while(left <= right){
        const sum = left*left + right*right;
        if(sum === c){
            return true;
        }else if(sum > c){
            right --;
        }else{
            left ++;
        }
    }
    return false;
};
// @lc code=end

