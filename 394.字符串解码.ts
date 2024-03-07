/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  const numStack: number[] = [];
  const strStack: string[] = [];
  let num = 0;
  let result = "";
  for(const char of s){
    // @ts-ignore
    if(!isNaN(char)){
      num = num * 10 + Number(char);
    }else if( char == "["){
      strStack.push(result);
      result = "";
      numStack.push(num);
      num = 0;
    }else if(char == "]"){
      const repeatTime = numStack.pop() as number;
      result = strStack.pop() + result.repeat(repeatTime); 
    }else {
      result += char;
    }
  }
  return result;
}
// @lc code=end
