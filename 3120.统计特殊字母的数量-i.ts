/*
 * @lc app=leetcode.cn id=3120 lang=typescript
 *
 * [3120] 统计特殊字母的数量 I
 */

// @lc code=start
function numberOfSpecialChars(word: string): number {
  const set = new Set();
  const ans = new Set();
  for (let w of word) {
    const wcode = w.charCodeAt(0);
    if(set.has(wcode < 97 ? wcode + 32 : wcode - 32)){
        // 找对应的大小写字母
        ans.add(wcode <97 ? wcode + 32 : wcode);
    }else{
        set.add(wcode);
    }
  }
  return ans.size;
}
// @lc code=end
