/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    if(x>0){
        let res = Number((''+x).split("").reverse().join(""))
        return res > 2**31-1? 0: res;
    }else{
        let str = ""+x;
        let res = 0-Number(str.slice(1).split("").reverse().join(""));
        return res < (-2)**31? 0 : res;
    }
};
// @lc code=end

