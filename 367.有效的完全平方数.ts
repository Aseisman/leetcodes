/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    // 二分
    // let left = 0, right = num;
    // while(left<=right){
    //     const mid = (right + left) >> 1;
    //     const square = mid * mid;
    //     if(square < num){
    //         left = mid + 1;
    //     }else if(square > num){
    //         right = mid - 1;
    //     }else{
    //         return true;
    //     }
    // }
    // return false;
    // 牛顿法
    let x0 = num;
    while (true) {
        const x1 = Math.floor((x0 + num / x0) / 2);
        if (x0 - x1 < 1e-6) {
            break;
        }
        x0 = x1;
    }
    return x0 * x0 === num;
};
// @lc code=end