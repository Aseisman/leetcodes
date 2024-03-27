// 给你一个字符串 S，找出所有长度为 K 且不含重复字符的子串，请你返回全部满足要求的子串的 数目。

// 示例 1：

// 输入：S = "havefunonleetcode", K = 5
// 输出：6
// 解释：
// 这里有 6 个满足题意的子串，分别是：'havef','avefu','vefun','efuno','etcod','tcode'。
// 示例 2：

// 输入：S = "home", K = 5
// 输出：0
// 解释：
// 注意：K 可能会大于 S 的长度。在这种情况下，就无法找到任何长度为 K 的子串。

// 提示：
// 1 <= S.length <= 10^4
// S 中的所有字符均为小写英文字母
// 1 <= K <= 10^4

/*
 * @lc app=leetcode.cn id=1100 lang=typescript
 *
 * [1100] 长度为K的无重复字符子串
 */

// @lc code=start
function numKLenSubstrNoRepeats(s: string, k: number): number {
  let ans = 0;
  let n = s.length;
  if (k > n) return 0;
  const cnt: Map<string, number> = new Map();
  for (let i = 0; i < n; i++) {
    cnt.set(s[i], (cnt.get(s[i]) ?? 0) + 1);
    if (i < k) continue;
    if (cnt.get(s[i - k]) === 1) {
      // 这里不可能是cnt.get(s[i - k])，因为一开始存进去的就是有值的。
      cnt.delete(s[i - k]);
    }
    ans += cnt.size === k ? 1 : 0;
  }
  return ans;
}
// @lc code=end
