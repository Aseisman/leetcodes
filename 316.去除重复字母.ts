/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
  // 单调栈；
  const stack: string[] = [];
  const sArr = s.split("");

  // 先进栈，然后判断栈内已经有的char 满足几个条件（ 后面有值替代，同时站内的char 比 即将进栈的值大，那么就踢出去pop）  
  // 如bcabc，站内有bc了此时进来个a，那么b，c比a 大同时后面有候补，那么给踢掉 
  sArr.forEach((char, i) => {
    if (stack.indexOf(char) >= 0) return;
    while (
      stack.length &&
      stack[stack.length - 1].charCodeAt(0) > char.charCodeAt(0) &&
      sArr.lastIndexOf(stack[stack.length - 1]) > i
    ) {
      stack.pop();
    }
    stack.push(char);
  });
  return stack.join("");
}
// @lc code=end
