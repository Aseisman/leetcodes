/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // s = s.toLowerCase();
  // let i = 0;
  // let j = s.length - 1;
  // let isLetters = (code:number)=>((code >= 48 && code <= 57 ) || ( code >= 97 && code <= 122 ))
  // while(i < j){
  //     let icode = s.charCodeAt(i);
  //     let jcode = s.charCodeAt(j);
  //     while(!isLetters(icode)){
  //         i++;
  //         if (i === j) return true
  //         icode = s.charCodeAt(i);
  //     }
  //     while(!isLetters(jcode)){
  //         j--;
  //         if (i === j) return true
  //         jcode = s.charCodeAt(j);
  //     }
  //     if(icode !== jcode) return false;
  //     i++;
  //     j--;
  // }
  // return true;

  let str = s.replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "").toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i++] != str[j--]) return false;
  }
  return true;
}
// @lc code=end