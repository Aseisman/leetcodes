/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 */

// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {
  let res: (string | number)[] = [];
  let integers: number[] = []; //求余的时候整数部分
  let decimals: number[] = []; //求余的时候小数部分
  let quotient: number = Math.floor(numerator / denominator); //商
  let remainder = numerator % denominator; //余数
  let checkRepeat = (q, r) => {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] == q && decimals[i] == r) {
        // 有循环；
        res.push(
          integers.slice(0, i).join("") + "(" + integers.slice(i).join("") + ")"
        );
        return true;
      }
    }
    return false;
  };
  if (remainder == 0) {
    // 整除
    res.push(quotient);
  } else {
    res.push(quotient + ".");
    // 开始小数部分循环
    while (remainder < denominator) {
      quotient = Math.floor((remainder * 10) / denominator); //不断乘10再除；
      remainder = (remainder * 10) % denominator;
      if (remainder == 0) {
        // 除的尽；
        integers.push(quotient);
        res.push(integers.join(""));
        break;
      } else {
        if (integers.length == 0) {
          integers.push(quotient);
          decimals.push(remainder);
          continue;
        }
        // 判断是否有循环: 两个数组，一个整数，一个小数，进行循环判断是否有相同的节
        let status = checkRepeat(quotient, remainder);
        if (status) {
          break;
        } else {
          integers.push(quotient);
          decimals.push(remainder);
        }
      }
    }
  }
  return res.join("");
}
// @lc code=end
