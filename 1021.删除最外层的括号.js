/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // let status = 0;
    // let left =0;
    // let res ='';
    // for(let i=0; i<s.length; i++){
    //     if(s[i]=='('){
    //         status +=1;
    //     }else if(s[i]==')'){
    //         status -=1;
    //     }
    //     if(status==0){
    //         // 可以入栈了
    //         res+=s.slice(left+1,i);
    //         left = i+1;
    //     }
    // }
    // return res;

    let status = 0;
    let res ='';
    for(let i=0; i<s.length; i++){
        if(s[i]=='('){
            status +=1;
        }
        if(status>1){
            res+=s[i];
        }
        if(s[i]==')'){
            status -=1;
        }
    }
    return res;
};
// @lc code=end

console.log(removeOuterParentheses("(()())(())(()(()))"));