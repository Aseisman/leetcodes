/*
 * @lc app=leetcode.cn id=2730 lang=typescript
 *
 * [2730] 找到最长的半重复子字符串
 */

// @lc code=start
function longestSemiRepetitiveSubstring(s: string): number {
  // 滑动窗口思想
  // 在 51223369 中找，其实就是在 512，23，369 拼接出来（51223，23369），看看哪个最长,并返回最长的长度
  let n = s.length, ans = 1, left = 0, same = 0;
  for(let right = 1; right < n; right++){
    if(s[right]==s[right-1] && ++same > 1){
        left++;//这里的left++ 是因为上次left保存的是相同值的后面一个数，如512233，left保存的是第二个2，下面while的时候就没法往前
        while(s[left] != s[left-1]){
            left++;
        }
        same = 1;
    }
    ans = Math.max(ans,right - left + 1);
  }
  return ans;
}

// @lc code=end
