/*
 * @lc app=leetcode.cn id=678 lang=typescript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
function checkValidString(s: string): boolean {
    let left:number[] = [], star:number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left.push(i);
        } else if (s[i] === ")") {
            if (left.length === 0) {
                if (star.length === 0) return false;
                star.pop();
            }else{
                left.pop();
            }
        } else {
            star.push(i);
        }
    }
    if(left.length > star.length) return false;
    // 下面这一步是为了对比 * 不能在（ 的前面
    while(left.length && star.length){
        //@ts-ignore
        if(left.pop() > star.pop()) return false;
    }
    return true;
};

// @lc code=end

