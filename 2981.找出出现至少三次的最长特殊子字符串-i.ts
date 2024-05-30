/*
 * @lc app=leetcode.cn id=2981 lang=typescript
 *
 * [2981] 找出出现至少三次的最长特殊子字符串 I
 */

// @lc code=start
function maximumLength(s: string): number {
  // 滑动窗口
  let map = {};
  let max = -1; // 最大长度
  let left = 0,
    right = 0;
  while (left < s.length) {
    if (s[left] == s[right]) right++;
    else {
      // [left,right)区间内是相同的，进行记录数量
      // 长度不同的时候，left和right之间相差1，也就是到时候k会去temp[1]找长度为1的频次，并记录下来。 
      for (let k = 0; k < right - left; k++) {
        // "aaaa"来说，他可以变成 1个"aaaa" 或者是 2"aaa a" 和 "a aaa" 或者是 3 个 "aa aa","a aa a","aa aa"
        // 即长度为n的连续字符串，n的频次是1，n-1的频次是2，累加1；
        // 我们max记录连续字符串的频次>=3的最大长度；
        // temp: key为长度，value为频次。

        let temp = map[s[left]] || new Array(48).fill(0);
        temp[k] += right - left - k;// 注意 +=
        if (temp[k] >= 3) {
          max = Math.max(k + 1, max);
        }
        map[s[left]] = temp;
      }
      left = right;
    }
  }
  return max;
}
// @lc code=end
