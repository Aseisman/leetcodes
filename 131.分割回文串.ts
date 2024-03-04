/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start

function partition(s: string): string[][] {
    const n = s.length;
    const res = [] as string[][];
    const map = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    const isPlalindrome = (i: number, j: number) => {
      if (map[i][j]) return map[i][j];
      if (i >= j) {
        // i==j 的情况，默认为1，dfs里没有>的情况，
        map[i][j] = 1;
      } else if (s[i] == s[j]) {
        map[i][j] = isPlalindrome(i + 1, j - 1);
      } else {
        map[i][j] = -1;
      }
      return map[i][j];
    };
  
    const dfs = (start: number, track: string[]) => {
      if (start == n) return res.push([...track]);
      for (let i = start; i < n; i++) {
        if (isPlalindrome(start, i) === 1) {
          track.push(s.slice(start, i + 1));
          dfs(i + 1, track);
          track.pop();
        }
      }
    };
    dfs(0, []);
    return res;
  }
// @lc code=end

