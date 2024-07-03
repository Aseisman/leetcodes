/*
 * @lc app=leetcode.cn id=1156 lang=typescript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
function maxRepOpt1(text: string): number {
  // 双指针；
  const cnt = new Array(26).fill(0);//统计a-z数量
  for (let c of text) {
    cnt[c.charCodeAt(0) - 97]++;
  }
  let ans = 0;
  let i = 0;
  const n = text.length;
  while (i < n) {
    let j = i;
    while (j < n && text[j] == text[i]) j++;//当前字符连续的长度
    const len = j - i;
    let k = j + 1;
    while (k < n && text[k] == text[i]) k++;//中断一个后，从第二个开始和当前字符相同的长度（可能为0）
    const len2 = k - j - 1;
    ans = Math.max(
      ans,
      Math.min(cnt[text[i].charCodeAt(0) - 97], len + len2 + 1)
    );// 计算两长度之和 和 统计到的数量 的最小值（因为两长度之和可能比统计到的数量大：aaabaaa,得到的两长度之和为7, 实际上为6）
    i = j;
  }
  return ans;
}
// @lc code=end
