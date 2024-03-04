/*
 * @lc app=leetcode.cn id=1249 lang=typescript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
    let stack = [] as number[];
    let res = [...s];
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '('){
            stack.push(i);
        }else if(s[i] === ')'){
            if(stack.length > 0){
                stack.pop();    
            }else{
                delete res[i];
            }
        }
    }
    stack.forEach(i => delete res[i]);
    return res.join('');
};
// @lc code=end

