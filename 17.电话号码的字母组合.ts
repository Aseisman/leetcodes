/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res:string[] = [];
  const DFS = (s:string) => {
    let n = s.length;
    if (s.length === digits.length) {
      res.push(s);
      return;
    }
    for (let i = 0; i < map[Number(digits[n])].length; i++) {
      DFS(s + map[Number(digits[n])][i]);
    }
  };
  DFS("");
  return res;
}
// function letterCombinations(digits: string): string[]{
//   if (!digits) return [];
//   const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//   const res = [] as string[];
//   const dfs =(index: number,str:string)=>{
//     if(str.length == digits.length) return res.push(str);
//     // index 表示当前正在第几个数
//     const curDigit = digits[index];
//     for(let i = 0; i < map[curDigit].length; i++){
//       dfs(index+1,str+map[curDigit][i]);
//     }
//   }
//   dfs(0,"");
//   return res;
// }
// @lc code=end