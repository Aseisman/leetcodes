/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map[c]) {
      const item = stack.pop();
      if (item !== map[c]) return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length == 0;
}
// @lc code=end
