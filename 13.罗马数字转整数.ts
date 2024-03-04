/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let res = 0;
  for(let i = 0; i < s.length ; i++){
    if(map[s[i]+s[i+1]]){
        res += map[s[i]+s[i+1]];
        i++;
    }else{
        res += map[s[i]]||0;
    }
  }
  return res;

}
// @lc code=end
