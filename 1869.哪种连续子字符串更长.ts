/*
 * @lc app=leetcode.cn id=1869 lang=typescript
 *
 * [1869] 哪种连续子字符串更长
 */

// @lc code=start
function checkZeroOnes(s: string): boolean {
    let flag = s[0];
    let count0 = 0;
    let count1 = 0;
    flag == '0' ? count0++ : count1++;
    let temp = 1;
    for(let i = 1; i< s.length; i++){
        if(s[i] == flag){
            temp++;
        }else{
            flag == '0' && (count0 = Math.max(temp,count0));
            flag == '1' && (count1 = Math.max(temp,count1));
            temp = 1;
            flag = s[i];
        }
    }
    flag == '0' && (count0 = Math.max(temp,count0));
    flag == '1' && (count1 = Math.max(temp,count1));
    
    return count1 > count0;
};
// @lc code=end

