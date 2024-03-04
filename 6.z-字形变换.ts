/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if(numRows == 1){
        return s;
    }
    const len  = Math.min(s.length,numRows);
    const rows:string[]=[];
    for(let i =0; i<len ;i++){
        rows[i]='';//根据numRows，模拟几行空白行
    }
    let p = 0;
    let down = false;//false是向上，true是向下
    for(const c of s){
        rows[p] +=c;
        if(p==0 || p == numRows-1){
            down = !down;
        }
        p += down ? 1: -1; //顺序：1，2，3，2，1，2，3，2，1
    }
    let ans = '';
    for(const row of rows){
        ans+=row;
    }
    return ans;
};
// @lc code=end

