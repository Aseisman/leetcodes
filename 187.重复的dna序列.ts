/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
    const map = new Set();
    const hash:Set<string> = new Set();
    const L = s.length  - 9;

    for(let i = 0; i < L; i++){
        let str:string = s.substring(i,i+10);
        if(map.has(str)){
            hash.add(str);
        }else{
            map.add(str);
        }
    }
    return [...hash];
};
// @lc code=end