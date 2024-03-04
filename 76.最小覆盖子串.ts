/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  // 普通的滑动窗口
  let map = {}; //存字母的数量
  for (let a of t) {
    map[a] = (map[a] || 0) + 1;
  }
  let window = {};
  let left, right;
  let valid = 0; //滑动窗口里面的字符种类数
  let len = Infinity;
  let start = 0; // 结果的起始, 最后start + len的长度的字符串
  while (right < s.length) {
    let c = s[right];
    right++;
    window[c] = (window[c] || 0) + 1;
    window[c] == map[c] && valid++;

    // 收缩条件是什么呢; valid 等于种类数了,那么就可以开始收缩了
    while (valid == Object.keys(map).length) {
      if (right - left < len) {
        len = right - left;
        start = left;
      }
      // 开始左移
      let d = s[left];
      left++;
      window[d] == map[d] && valid--;
      window[d]--;
    }
  }
  return len == Infinity ? "" : s.substring(start, start + len);
}
// @lc code=end
