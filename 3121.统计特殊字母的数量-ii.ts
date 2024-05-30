/*
 * @lc app=leetcode.cn id=3121 lang=typescript
 *
 * [3121] 统计特殊字母的数量 II
 */

// @lc code=start
function numberOfSpecialChars(word: string): number {
  let ans = 0;
  const map = {};
  for (let i = 0; i < word.length; i++) {
    const w = word[i];
    if(w.charCodeAt(0) >= 97 && w.charCodeAt(0) <= 122){
        // 小写字母
        map[word[i]] = i; //记录每个字母的最大下标
    }else{
        // 大写
        if(!(map[word[i]] >= 0)) map[word[i]] = i;//记录每个大写字母的第一个下标
    }
  }
  Object.keys(map)
    .filter((w) => w.charCodeAt(0) >= 97 && w.charCodeAt(0) <= 122)
    .map((w) => {
      // 大写字母的第一个下标和小写的最后一个比  
      map[w.toLocaleUpperCase()] >= map[w] && ans++;
    });
  return ans;
}
// @lc code=end
