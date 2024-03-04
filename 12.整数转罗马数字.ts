/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
  const map = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let res = "",
    dividend = num;
  let mapArr = Object.keys(map); //[1,4,5,9,10,40,50,90,100,400,500,900]
  // 除数
  let divisor = Number(mapArr.pop()) || 1;
  while (dividend > 0) {
    // 找到比被除数小的除数
    while(divisor > dividend) divisor = Number(mapArr.pop()) || 1;
    // 商
    let s = Math.floor(dividend / divisor);
    // 商有多少个,就写多少个罗马数字
    if (s) {
      for(let i = 0 ; i < s; i++){
          res += map[divisor];
      }
    }
    // 余数
    dividend = dividend % divisor;
  }
  return res;
}
// @lc code=end
