/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
function partitionLabels(s: string): number[] {
    let start = 0;
    let end = 0;
    const res = [] as number[];
    const last_map = new Map<string, number>();
    const len = s.length;
    for (let i = 0; i < len; i++) {
      last_map.set(s[i], i);
    }
  
    for (let i = 0; i < len; i++) {
      const c = s[i];
      const endc = last_map.get(c) || 0;
      end = Math.max(endc, end);
      if (end == i) {
        res.push(end - start + 1);
        start = end + 1;
      }
    }
    return res;
}

// @lc code=end

