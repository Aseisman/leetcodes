/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    // 关键点：左边比右边多括号时，才可以 dfs右边的括号
    const res = [] as string[];
    const dfs = (left: number, right: number, str: string) => {
      if (str.length == 2 * n) return res.push(str);
      if (left < n) dfs(left + 1, right, str + "(");
      if (left > right) dfs(left, right + 1, str + ")");
    };
    dfs(0, 0, "");
    return res;
};
// @lc code=end

